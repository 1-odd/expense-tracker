import ExpenseSchema from "../models/ExpenseModel.js";

const deleteExpense = async (req, res) => {
  const { id } = req.params;
  console.log(id)
  ExpenseSchema.findByIdAndDelete(id)
    .then((income) => {
      res.status(200).json({ message: "Expense Deleted" });
    })
    .catch((err) => {
      res.status(500).json({ message: "Server Error" });
    });
};
export default deleteExpense;
