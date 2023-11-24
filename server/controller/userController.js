import User from "../model/User.js";
import mongoose from "mongoose";
import { toast } from "react-toastify";

export const userController = async (req, res) => {
  try {
    const { sub } = req.body;
    const existingUser = await User.findOne({ sub: req.body.sub });

    if (existingUser) {
      res.status(200).send({ message: "User already exists", success: false });
      return;
    }

    const newUser = new User(req.body);
    await newUser.save();
    return res.status(201).send({ message: "User created!", success: true });
  } catch (error) {
    console.log(error);
  }
};
