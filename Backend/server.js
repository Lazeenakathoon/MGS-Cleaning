
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const connectDB = require("./config/db");
const Enquiry = require("./models/Enquiry");

const app = express();

app.use(cors({
  origin: process.env.CLIENT_URL || "http://localhost:5173"
}));

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Welcome to MGS Cleaning API"
  });
});

app.get("/api/health", (req, res) => {
  res.json({
    success: true,
    message: "MGS Backend is running",
    database: mongoose.connection.readyState === 1 ? "connected" : "disconnected"
  });
});

app.post("/api/enquiries", async (req, res) => {
  const { name, phone, area, service, details = "" } = req.body || {};
  const enquiry = {
    name: typeof name === "string" ? name.trim() : "",
    phone: typeof phone === "string" ? phone.trim() : "",
    area: typeof area === "string" ? area.trim() : "",
    service: typeof service === "string" ? service.trim() : "",
    details: typeof details === "string" ? details.trim() : ""
  };

  if (
    enquiry.name.length < 2 ||
    enquiry.name.length > 100 ||
    !/^[+()\d\s-]{7,20}$/.test(enquiry.phone) ||
    !enquiry.area ||
    enquiry.area.length > 100 ||
    !enquiry.service ||
    enquiry.service.length > 100 ||
    enquiry.details.length > 1000
  ) {
    return res.status(400).json({
      success: false,
      message: "Please provide a valid name, phone, area, service, and enquiry details."
    });
  }

  if (mongoose.connection.readyState !== 1) {
    return res.status(503).json({
      success: false,
      message: "Enquiry service is temporarily unavailable. Please try again shortly."
    });
  }

  try {
    const savedEnquiry = await Enquiry.create(enquiry);
    return res.status(201).json({
      success: true,
      message: "Your enquiry has been sent to MGS.",
      enquiryId: savedEnquiry.id
    });
  } catch (error) {
    console.error("Failed to save enquiry:", error.message);
    return res.status(500).json({
      success: false,
      message: "We couldn't save your enquiry. Please try again."
    });
  }
});

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    await connectDB();
  } catch (error) {
    console.error("MongoDB Connection Failed:", error.message);
  }

  app.listen(PORT, () => {
    console.log(`MGS Server running on port ${PORT}`);
  });
};

if (require.main === module) {
  startServer();
}

module.exports = app;
