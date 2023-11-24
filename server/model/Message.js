import mongoose from "mongoose";

const messageSchema = mongoose.Schema(
  {
    conversationId: {
      type: String,
    },
    receiverId: {
      type: String,
    },
    senderId: {
      type: String,
    },
    text: {
      type: String,
    },
    type: {
      type: String,
    },
  },
  { timestamps: true }
);

export const Message = mongoose.model("message", messageSchema);
