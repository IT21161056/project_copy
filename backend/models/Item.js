const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ItemSchema = new Schema({
    itemName : {type : String, required : true},
    price : {type : Number, required : true},
    category : {type : String, required : true},
    description : {type : String },
    image : {type : String},
    totalQuantity : {type : Number },
})

const Item = mongoose.model("Item",ItemSchema)//para 1 table name, whch schema

module.exports = Item; 