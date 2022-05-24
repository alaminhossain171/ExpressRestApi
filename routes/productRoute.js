const productRoute = require("express").Router();
let products = [
  { id: 1, name: "Samsung Tv", price: "26000 $" },
  { id: 2, name: "Nokia Mobile", price: "6000 $" },
  { id: 3, name: "R1 5 bike", price: "360000 $" },
];
productRoute.get("/api/products", (req, res) => {
  res.json(products);
});

productRoute.post("/api/products", (req, res) => {
const {name,price}=req.body
 if(!name||!price){
     return res.status(422).json({error:'All field are required'})
 }
 const product={
     name,
     price,
     id:new Date().getTime().toString()
 }
 products.push(product)
  res.json(product)

});
module.exports = productRoute;
