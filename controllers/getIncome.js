
import IncomeSchema from '../models/IncomeModel.js'


const getIncome = async (req , res)=>{
    try {

        const income = await IncomeSchema.find().sort({createdAt : -1})
        console.log(income)
        res.status(200).json(income);
        
    } catch (error) {
        res.status(500).send({
            msg:"server error please try again",
            success:false,
            err:error
        })
    }
}

export default getIncome;