import ExpenseSchema from '../models/ExpenseModel.js'

const addExpense = async (req,res)=>{

    const {title , amount , category ,  discription ,date   } = req.body;

    try {

        // validation check

       if(!title || !category || !discription || !date ){
        return res.status(400).json({msg : "Please fill all fields"})
       }

       if(amount<=0 || ! amount ==='number'){
        return res.status(400).json({msg: "Amount must be a positive number"});
       }

       const expense  = await ExpenseSchema.create({

        title , 
        amount ,
        category,
        discription ,
        date,
        

    })
    res.status(200).send({
        msg:"Expense added successfully",
        success:true,
        data: expense
    })
        
    } catch (error) {
        res.status(500).send({
            msg:"server error please try again",
            success:false,
            err:error
        })
    }
   

}

export default addExpense;