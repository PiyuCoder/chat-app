import Conversation from "../model/Conversation.js";

const conversationController = async (req, res) => {
  try {
    const senderId = req.body.senderId;
    const receiverId = req.body.receiverId;

    const exist = await Conversation.findOne({
      members: { $all: [senderId, receiverId] },
    });
    if (exist) {
      return res.status(200).json("conversation already exists");
    }

    const newConversation = new Conversation({
      members: [senderId, receiverId],
    });

    await newConversation.save();
    return res.status(200).json("conversation added successfully.");
  } catch (error) {
    console.log(error);
  }
};

export default conversationController;
