import IncomeSchema from '../models/IncomeModel.js'

  const addIncome = async (req,res)=>{

    const {title , amount , category ,  discription ,date , type } = req.body;

    try {

        // validation check

       if(! title || !category || ! amount || ! date ){
        return res.status(400).json({msg : "Please fill all fields"})
       }

       if(amount<=0 || ! amount ==='number'){
        return res.status(400).json({msg: "Amount must be a positive number"});
       }

       const income  = await IncomeSchema.create({

        title , 
        amount ,
        category,
        discription ,
        date,
        type

    })
    res.status(200).send({
        msg:"income added successfully",
        success:true,
        data: income
    })
        
    } catch (error) {
        res.status(500).send({
            msg:"server error please try again",
            success:false,
            err:error
        })
    }
   

}

   

   

export default addIncome;