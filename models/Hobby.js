import mongoose from "mongoose";

const hobbySchema = new mongoose.Schema({
    name: {
        type: String, 
        required: [true, "please provide a hobby name"],
        trim : true,
        maxlenght: [50, "hobby name cannot be more than 50 charecters" ],
    },
    category: {
        type: String,
        enum: ["sports", "arts", "music", "gaming", "reading", "other",],
        default: " other",
    },
    description: {
        type: String,
        trim: true,
        maxlenght: [500, "description cannot be more than 500 chatecters"],
    },
    frequency: {
        type: String,
        enum: ["daily", "weekly", "monthly", "rarely", ],
        default: " weekly",
    },
    isActive: {
        type: Boolean,
        default: true,
    },
}, {timestamps: true});

export const Hobby =  mongoose.model("Hobby", hobbySchema);