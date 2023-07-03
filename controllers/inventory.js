const Product = require('../models/inventory');



module.exports.create = async function(req, res){
    try{
       let inventory = await Product.create(req.body);
       return res.status(200).json({
           'message': 'Product created successfully',
            data: inventory
       })
    }catch(err){
       console.log('Error while creating product', err);
       return;
    }

}