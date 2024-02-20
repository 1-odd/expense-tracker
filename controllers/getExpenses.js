import ExpenseSchema from '../models/ExpenseModel.js'


const getExpenses = async (req , res)=>{
    try {

        const expense = await ExpenseSchema.find().sort({createdAt : -1})
        res.status(200).json(expense);
        
    } catch (error) {
        res.status(500).send({
            msg:"server error please try again",
            success:false,
            err:error
        })
    }
}

export default getExpenses;