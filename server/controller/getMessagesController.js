import { Message } from "../model/Message.js";

export const getMessagesController = async (req, res) => {
  try {
    const messages = await Message.find({ conversationId: req.params.id });
    return res.status(200).json(messages);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};
