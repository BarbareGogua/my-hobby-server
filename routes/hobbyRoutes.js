import express from "express";

const hobbyRouter = express.Router();

hobbyRouter.get("/test", async (requestAnimationFrame, res) => {
  return res.json({ title: "hello" });
});

export default hobbyRouter;