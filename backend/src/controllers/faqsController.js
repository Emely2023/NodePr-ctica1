import faqsModel from "../models/faqs.js";

const faqsController = {};


//GET
faqsController.getAllfaqs = async(req,res)=>{

    try {
        const faqs = await faqsModel.find()
        res.status(200).json(faqs)
    } catch (error) {
        console.log("error"+error)
        res.status(500).json("Internal server Error")
    }
}

//INSERT
faqsController.insertFaqs = async(req,res)=>{

     //1 Pedir los datos
     const{ question, answer, level, isActive} = req.body;

     try {
        //Validaciones

        //Si hay campos vacios
        if(!question || !answer || !level|| !isActive){
            return res.status(400).json({message: "Please write all the blanks"})
        }

        if(level < 1 || level >10){
            return res.status(400).json({message: "Please insert a valid level"})
        }
        if(question.lenght < 4 || answer.lenght <4){
            return res.status(400).json({message: "Too short"})
        }

        //Guardamos todo en la base de datos
        const newFaqs = new faqsModel({
            question,
            answer,
            level,
            isActive
        });

        newFaqs.save();
        res.status(200).json({ message: "Faqs Saved"});

     } catch (error) {
        console.log(error + error)
        res.status(500).json({message: "Internal server error"})
     }
};

//UPDATE
faqsController.updateFaqs = async(req, res)=>{
    // pIDO LAS COSAS
    const {question, answer, level, isActive} = req.body

    try {
        if (level < 1 || level >10 ){
            return res.status(400).json({message: "ingrese un valor disponible"})
        }
        
        if(question.lenght < 4 || answer.lenght <4){
            return res.status(400).json({message: "Too short"})
        }

        const faqsUpdated = await faqsModel.FaqsUpdated(
            req.params.id,
            {question, answer,level, isActive},
            {new: true}
        )
        if(!faqsUpdated){
            return res.status(400).json({message: "faqs not found"})
        }
        res.status(200).json({message : "faqs updated"})

    } catch (error) {
        console.log("error"+ error)
        return res.status(500).json({message: "Internal server error"})
    }
};

//DELETE
faqsController.deleteFaqs = async(req, res)=>{

try {
    const deleteFaqs = await faqsModel.findByIdAndDelete(req.params.id);

    if(!deleteFaqs){
        return res.status(400).json({message: "faqs not found"})
    }

    res.status(200).json({message: "faq deleted"})
} catch (error) {
    console.log("error"+ error)
    return res.status(500).json({message: "Internal server error"})
}
};
export default faqsController;