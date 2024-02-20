import IncomeSchema from '../models/IncomeModel.js'
 const deleteIncome = async (req, res) => {
    const { id } = req.params;
    try {
        console.log(req.params)
      const income = await IncomeSchema.findByIdAndDelete(id);
      if (income) {
        res.status(200).json({ message: 'Income Deleted' });
      } else {
        res.status(404).json({ message: 'Income not found' });
      }
    } catch (err) {
      console.error('Error deleting income:', err);
      res.status(500).json({ message: 'Server Error' });
    }
  };
  
export default deleteIncome;