const express = require('express');
const Member  = require('../models/Member');
const router  = express.Router();

// POST /api/members/register
router.post('/register', async (req, res) => {
  const { name, mobileNo, dob, aadhaarLast4, membershipId, aadhaarVerified } = req.body;
  try {
    const member = new Member({ name, mobileNo, dob, aadhaarLast4, membershipId, aadhaarVerified });
    await member.save();
    res.json({ success: true, data: member });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// GET /api/members — list all members
router.get('/', async (req, res) => {
  try {
    const members = await Member.find().sort({ createdAt: -1 });
    res.json({ success: true, data: members });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

module.exports = router;
