import mongoose from "mongoose";

const Schema = new mongoose.Schema({
  username: String,
  data: Object,
});

const ContentModel = mongoose.model("Content", Schema, "contents");
export default ContentModel;

