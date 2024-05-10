const mongoose = require("mongoose");
 const Schema = mongoose.Schema;
 const models = mongoose.models;

 // define the Schema (the structure of the article)
 const productSchema = new Schema({
   name: String,
   addres: Number,
   select: String,

 });

 // Create a model based on that schema
 const AdduserModal = models.sarayuser || mongoose.model("sarayuser", productSchema);

 // export the model
 module.exports = AdduserModal;