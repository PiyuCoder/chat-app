import User from "../model/User.js";

export const getUserController = async (req, res) => {
  try {
    const users = await User.find({});
    return res.status(200).json(users);
  } catch (error) {
    return res.status(500).send({ message: error, success: false });
  }
};
