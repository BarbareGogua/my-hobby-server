import mongoose from "mongoose";

const hobbySchema = new mongoose.Schema({
name: {
type: String,
required: [true, "please provide a hobby name"],
trim: true,
maxlength: [50, "hobby name cannot be more than 50 characters"],
},
category: {
type: String,
enum: ["sports", "arts", "music", "gaming", "reading", "other"],
default: "other",
},
description: {
type: String,
trim: true,
maxlength: [500, "description cannot be more than 500 characters"],
},
frequency: {
type: String,
enum: ["daily", "weekly", "monthly", "rarely"],
default: "weekly",
},
isActive: {
type: Boolean,
default: true,
},
}, { timestamps: true });

const Hobby = mongoose.model("Hobby", hobbySchema);
export default Hobby;