const mongoose = require("mongoose");

const commentSchema = mongoose.Schema(
  {
    author: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },

    content: {
      type: String,
      required: true,
    },
  },

  {
    timestamps: true,
  }
);

const postSchema = mongoose.Schema(
  {
    author: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },

    title: {
      type: String,
      required: true,
    },

    image: {
      type: String,
    },

    content: {
      type: String,
      required: true,
    },

    comment: [commentSchema],
  },

  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Post", postSchema);
