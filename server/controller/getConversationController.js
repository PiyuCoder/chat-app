import Conversation from "../model/Conversation.js";

export const getConversationController = async (req, res) => {
  try {
    const senderId = req.body.senderId;
    const receiverId = req.body.receiverId;

    const conversation = await Conversation.findOne({
      members: { $all: [senderId, receiverId] },
    });

    return res.status(200).json(conversation);
  } catch (error) {
    console.log(error);
  }
};
