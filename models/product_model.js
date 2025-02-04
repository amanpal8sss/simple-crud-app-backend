const { Timestamp } = require("mongodb");
const mongoose = require("mongoose");
const ProductSchema =  new mongoose.Schema(
  {
    name: {
      type: String,
      required:[true,"enter the name"]
    },

    quantity: {
      type: Number,
      required: true,
      default: 0
    },

    price: {
      type: Number,
      required: true,
      default: 0
    },

    image: {
      type: String,
      required: false
    },
  },
  {
    timestamps: true
  }
);

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;