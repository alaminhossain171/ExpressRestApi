const productRoute = require("express").Router();
let products = [
  {
      id: '1',
      name: 'Photoshop',
      price: 300
  },
  {
      id: '2',
      name: 'Webstorm',
      price: 200
  },
  {
      id: '3',
      name: 'Figma',
      price: 20
  }
]
productRoute.get("/api/products", (req, res) => {
  res.json(products);
});

productRoute.post("/api/products", (req, res) => {
const {name,price}=req.body
 if(!name||!price){
     throw new Error("All fields are required!")
 }
 const product={
     name,
     price,
     id:new Date().getTime().toString()
 }
 products.push(product)
  res.json(product)

});

productRoute.delete('/api/products/:productId', (req, res) => {
  products = products.filter((product) => req.params.productId !== product.id);
  res.json({ status: 'OK' });
});
module.exports = productRoute;
