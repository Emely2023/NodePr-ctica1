import SalesModel from "../models/Sales.js";

const salesController = {};

 
//categoryes
salesController.salesByCategory = async (req, res)=>{
    try {
        const resultado = await SalesModel.aggregate(
            [
                {
                    $group: {
                        _id: "$category",
                        totalVentas: {$sum: "$total"}
                    }
                },
 
                {
                    $sort: {totalVentas: -1}
                }
            ]
        )
        res.status(200).json(resultado)
    } catch (error) {
        console.log("error"+error)
        res.status(500).json({message: "Internal server error"})
    }
}
 
//bestProduct
salesController.bestSeller = async (req,res) => {
    try {
        const resultado = await SalesModel.aggregate(
            [
                {
                    $group: {
                        _id: "$product",
                        cantidad: {$sum: 1}
                    }
                },
                {
                    $sort: {cantidad: -1}
                },
                {
                    $limit: 5
                }
            ]
        )
        res.status(200).json(resultado)
    } catch (error) {
        console.log("error"+error)
        res.status(500).json({message: "Internal server error"})
    }
   
}
 
//Frecuent Customers
salesController.frecuentCustomer = async(req,res)=>{
    try {
        const resultado = await SalesModel.aggregate(
            [
                {
                    $group:{
                        _id: "$customer",
                        compras: {$sum: 1}
                    }
                },
                {
                    $sort: {cantidad: -1}
                },
                {
                    $limit: 3
                }
            ]
        )
        res.status(200).json(resultado)
    } catch (error) {
        console.log("error"+error)
        res.status(500).json({message: "Internal server error"})
    }
}
 
//earnings
 
salesController.totalEarnings = async (req,res) => {
    try {
        const resultado = await SalesModel
        .aggregate(
            [
                {
                    $group: {
                        _id: null,
                        gananciasTotales: {$sum: "$total"}
                    }
                }
            ]
        )
        res.status(200).json(resultado)
    } catch (error) {
        console.log("error"+error)
        res.status(500).json({message: "Internal server error"})
    }
};

salesController.insertSales = async (req,res) => {
    try {
        const { product, category, customer, total, date} = req.body;
         
        const newSale = new SalesModel({product,category,customer,total,date})
 
        await newSale.save()
 
        res.status(200).json({message: "Sale saved"})
    } catch (error) {
        console.log("error"+error)
        res.status(500).json({message: "Internal server error"})
    }
};
 
export default salesController;
 