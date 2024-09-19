// controllers/complaintController.js
const Complaint = require("../Model/Complaint");

// Submit a complaint
exports.submitComplaint = async (req, res) => {
  const { firstName, lastName, email, phoneNumber, productNameOrCode, description } = req.body;
  
  try {
    const newComplaint = new Complaint({
      firstName,
      lastName,
      email,
      phoneNumber,
      productNameOrCode,
      description,
    });

    await newComplaint.save();
    res.status(201).json({ message: "Complaint submitted successfully", complaint: newComplaint });
  } catch (error) {
    res.status(500).json({ message: "Failed to submit complaint", error: error.message });
  }
};

// Get all complaints
exports.getAllComplaints = async (req, res) => {
  try {
    const complaints = await Complaint.find();
    res.status(200).json(complaints);
  } catch (error) {
    res.status(500).json({ message: "Failed to retrieve complaints", error: error.message });
  }
};
// Update a complaint
exports.updateComplaint = async (req, res) => {
  try {
    const updatedComplaint = await Complaint.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json({ message: "Complaint updated", updatedComplaint });
  } catch (error) {
    res.status(500).json({ message: "Failed to update complaint", error: error.message });
  }
};

// Delete a complaint
exports.deleteComplaint = async (req, res) => {
  try {
    await Complaint.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Complaint deleted" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete complaint", error: error.message });
  }
};

