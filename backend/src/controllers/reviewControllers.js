const reviewControllers = {};

import reviewModel from "../models/Reviews.js"


//SELECT
reviewControllers.getReviews = async (req, res) => {
    const reviews = await reviewModel.find().populate('idCliente')
    res.json(reviews)
}
// INSERT
reviewControllers.createReviews = async (req, res) => {
    const{ comment, rating, idCliente } = req.body;
    const newReview = new reviewModel ({ comment, rating,idCliente});
    await newReview.save()
    res.json({ message : "Review saved"});
}
    //DELETE
reviewControllers.deleteReviews = async (req, res) => {
    await reviewModel.findOneAndDelete(req.params.id)
    res.json({message:"Review deleted"})
    }
    
    //UPDATE
reviewControllers.updateReviews = async (req, res) => {
    //  Solicito todos los valores
    const {comment, rating, idCliente} = req.body;
    
        await reviewModel.findByIdAndUpdate(req.params.id,{
            comment,
            rating,
            idCliente
        },{new: true}
    );
    // muestro un mensaje que todo se actulizó
    res.json({ message: "Review uptated"});
    };
    export default reviewControllers;