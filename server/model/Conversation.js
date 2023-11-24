import mongoose from "mongoose";

const convSchema = mongoose.Schema(
  {
    members: {
      type: Array,
    },
    message: {
      type: String,
    },
  },
  { timestamps: true }
);

const Conversation = mongoose.model("conversation", convSchema);

export default Conversation;
