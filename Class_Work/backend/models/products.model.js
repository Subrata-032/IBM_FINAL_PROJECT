const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    image:{
        type:String,
    },
    videolink:{
        type:String,
    },
    
});

const productModel = mongoose.model("product", productSchema);

module.exports={
    productModel
}

