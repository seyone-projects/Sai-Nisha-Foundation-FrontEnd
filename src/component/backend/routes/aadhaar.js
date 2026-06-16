const express = require('express');
const axios   = require('axios');
const router  = express.Router();

// Get Sandbox auth token
async function getSandboxToken() {
  const res = await axios.post(
    `${process.env.SANDBOX_BASE_URL}/authenticate`,
    {},
    {
      headers: {
        'x-api-key':     process.env.SANDBOX_API_KEY,
        'x-api-secret':  process.env.SANDBOX_API_SECRET,
        'x-api-version': '2.0'
      }
    }
  );
  return res.data.access_token;
}

// Verhoeff checksum (backend re-validation)
function isValidAadhaar(num) {
  const d = [
    [0,1,2,3,4,5,6,7,8,9],[1,2,3,4,0,6,7,8,9,5],[2,3,4,0,1,7,8,9,5,6],
    [3,4,0,1,2,8,9,5,6,7],[4,0,1,2,3,9,5,6,7,8],[5,9,8,7,6,0,4,3,2,1],
    [6,5,9,8,7,1,0,4,3,2],[7,6,5,9,8,2,1,0,4,3],[8,7,6,5,9,3,2,1,0,4],
    [9,8,7,6,5,4,3,2,1,0]
  ];
  const p = [
    [0,1,2,3,4,5,6,7,8,9],[1,5,7,6,2,8,3,0,9,4],[5,8,0,3,7,9,1,4,6,2],
    [8,9,1,6,0,4,3,5,2,7],[9,4,5,3,1,2,6,8,7,0],[4,2,8,6,5,7,3,9,0,1],
    [2,7,9,3,8,0,6,4,1,5],[7,0,4,6,9,1,3,5,8,2]
  ];

  if (!/^\d{12}$/.test(num) || num[0] === '0' || num[0] === '1') return false;

  let c = 0;
  num.split('').map(Number).reverse().forEach((n, i) => {
    c = d[c][p[i % 8][n]];
  });
  return c === 0;
}

// POST /api/aadhaar/send-otp
router.post('/send-otp', async (req, res) => {
  const { aadhaarNumber } = req.body;

  if (!aadhaarNumber) {
    return res.status(400).json({ success: false, message: 'Aadhaar number is required.' });
  }

  if (!isValidAadhaar(aadhaarNumber)) {
    return res.status(400).json({ success: false, message: 'Invalid Aadhaar number.' });
  }

  let token;
  try {
    token = await getSandboxToken();
  } catch (err) {
    console.error('Token fetch error:', err.response?.data || err.message);
    return res.status(500).json({
      success: false,
      message: 'Failed to authenticate with sandbox.',
      error: err.response?.data || err.message
    });
  }

  try {
    const response = await axios.post(
      `${process.env.SANDBOX_BASE_URL}/kyc/aadhaar/otp`,
      {
        '@entity': 'in.co.sandbox.kyc.aadhaar.otp.request',
        aadhaar_number: aadhaarNumber
      },
      {
        headers: {
          'x-api-key':    process.env.SANDBOX_API_KEY,
          'x-api-secret': process.env.SANDBOX_API_SECRET,
          Authorization:  `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      }
    );

    return res.json({
      success: true,
      ref_id:  response.data.data.ref_id,
      message: 'OTP sent successfully.'
    });

  } catch (err) {
    console.error('Send OTP error:', err.response?.data || err.message);
    return res.status(500).json({
      success: false,
      message: 'Failed to send OTP.',
      error: err.response?.data || err.message
    });
  }
});

// POST /api/aadhaar/verify-otp
router.post('/verify-otp', async (req, res) => {
  const { refId, otp, aadhaarNumber } = req.body;

  if (!refId || !otp || !aadhaarNumber) {
    return res.status(400).json({
      success: false,
      message: 'refId, otp, and aadhaarNumber are all required.'
    });
  }

  let token;
  try {
    token = await getSandboxToken();
  } catch (err) {
    console.error('Token fetch error:', err.response?.data || err.message);
    return res.status(500).json({
      success: false,
      message: 'Failed to authenticate with sandbox.',
      error: err.response?.data || err.message
    });
  }

  try {
    const response = await axios.post(
      `${process.env.SANDBOX_BASE_URL}/kyc/aadhaar/verify`,
      {
        '@entity': 'in.co.sandbox.kyc.aadhaar.request',
        ref_id: refId,
        otp
      },
      {
        headers: {
          'x-api-key':    process.env.SANDBOX_API_KEY,
          'x-api-secret': process.env.SANDBOX_API_SECRET,
          Authorization:  `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      }
    );

    return res.json({
      success:  true,
      message:  'Aadhaar verified successfully.',
      data:     response.data
    });

  } catch (err) {
    console.error('Verify OTP error:', err.response?.data || err.message);
    return res.status(400).json({
      success: false,
      message: err.response?.data?.message || 'OTP verification failed.',
      error:   err.response?.data || err.message
    });
  }
});

module.exports = router;