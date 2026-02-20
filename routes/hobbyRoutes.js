import express from "express";
import Hobby from "../models/Hobby.js"; 

const hobbyRouter = express.Router();

hobbyRouter.post("/", async (req, res) => {
  try {
    const { name, description, category, frequency } = req.body;

  
    if (!name) {
      return res.status(400).json({ error: "Hobby name is required" });
    }

  
    const hobby = await Hobby.create({
      name,
      description,
      category,
      frequency,
    });

    
    res.status(201).json({
      status: "success",
      data: hobby,
      message: "Hobby created successfully",
    });
  } catch (err) {
    
    res.status(500).json({
      status: "error",
      error: err.message,
    });
  }
});


hobbyRouter.get("/", async (req, res) => {
try {
const hobbies = await Hobby.find();
res.status(200).json({
status: "success",
count: hobbies.length,
data: hobbies,
});
} catch (err) {
res.status(500).json({
status: "error",
error: err.message,
});
}
});



hobbyRouter.put("/:id", async (req, res) => {
   try {
    const { id } = req.params;
    const { name, description, category, frequency, isActive } = req.body;

    const hobby = await Hobby.findByIdAndUpdate(
      id,
      {
        name,
        description,
        category,
        frequency,
        isActive,
      },
      {
        new: true,
      }
    );

    if (!hobby) {
      return res.status(404).json({
        status: "error",
        error: "Hobby not found",
      });
    }

    res.status(200).json({
      status: "success",
      data: hobby,
      message: "Hobby updated successfully",
    });
  } catch (err) {
    res.status(500).json({
      status: "error",
      error: err.message,
    });
  }
});



hobbyRouter.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const hobby = await Hobby.findByIdAndDelete(id);

    if (!hobby) {
      return res.status(404).json({
        status: "error",
        error: "Hobby not found",
      });
    }

    res.status(200).json({
      status: "success",
      data: hobby,
      message: "Hobby deleted successfully",
    });
  } catch (err) {
    res.status(500).json({
      status: "error",
      error: err.message,
    });
  }
});

export default hobbyRouter;