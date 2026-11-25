const mongoose = require("mongoose");

const enquirySchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true, minlength: 2, maxlength: 100 },
    phone: { type: String, required: true, trim: true, maxlength: 20 },
    area: { type: String, required: true, trim: true, maxlength: 100 },
    service: { type: String, required: true, trim: true, maxlength: 100 },
    details: { type: String, trim: true, maxlength: 1000, default: "" }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Enquiry", enquirySchema);
