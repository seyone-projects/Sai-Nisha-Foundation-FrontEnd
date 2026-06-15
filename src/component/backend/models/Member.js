const mongoose = require('mongoose');

const MemberSchema = new mongoose.Schema({
  name:            { type: String, required: true },
  mobileNo:        { type: String, required: true },
  dob:             { type: String, required: true },
  aadhaarLast4:    { type: String, required: true }, // ⚠️ Never store full Aadhaar
  membershipId:    { type: String, required: true, unique: true },
  aadhaarVerified: { type: Boolean, default: false },
  registeredAt:    { type: Date, default: Date.now }
}, { timestamps: true });

module.exports = mongoose.model('Member', MemberSchema);
