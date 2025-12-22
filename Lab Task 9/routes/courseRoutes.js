const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const Course = require("../models/Course");


router.post("/", async (req, res) => {
    try {
        const course = await Course.create(req.body);
        res.status(201).json(course);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});


router.get("/", async (req, res) => {
    try {
        const courses = await Course.find();
        res.json(courses);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


router.get("/:id", async (req, res) => {
    const id = req.params.id.trim();

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: "Invalid course ID" });
    }

    try {
        const course = await Course.findById(id);
        if (!course) return res.status(404).json({ message: "Course not found" });
        res.json(course);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


router.put("/:id", async (req, res) => {
    const id = req.params.id.trim();

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: "Invalid course ID" });
    }

    try {
        const updated = await Course.findByIdAndUpdate(id, req.body, { new: true });
        if (!updated) return res.status(404).json({ message: "Course not found" });
        res.json(updated); 
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

router.delete("/:id", async (req, res) => {
    const id = req.params.id.trim();

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: "Invalid course ID" });
    }

    try {
        const deleted = await Course.findByIdAndDelete(id);
        if (!deleted) return res.status(404).json({ message: "Course not found" });
        res.json({ message: "Course deleted successfully", course: deleted });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
