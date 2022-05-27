const express = require("express");
const routes = require("./routes");
const productRoute = require("./routes/productRoute");
const app = express();
app.use(express.json())
app.use(routes)
app.use(productRoute)
app.set('view engine','ejs')
app.use(express.static('public'))
app.use((req,res,next)=>{
  res.send('page not found')
  next()
})

app.use((err,req,res,next)=>{
  console.log(err.message);
  res.status(422).json({message:err.message})
})
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
