import mongoose from "mongoose";

const IncomeSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Income source can't be empty"],
      trim: true,
      maxLength: 50,
    },
    amount: {
      type: Number,
      required: [true, "Amount cannot be empty"],
      maxLength: 20,
      trim: true,
    },
    type: {
      type: String,
      default: "income",
    },
    date: {
      type: Date,
      required: true,
      default: Date.now(),
    },
    category: {
      type: String,
      required: [true, "Category is required"],
      trim: true,
    },
    discription: {
      type: String,
      trim: true,
      maxlength: 100,
      
    },
  },
  { timestamps: true }
);

export default mongoose.model("Income", IncomeSchema);
