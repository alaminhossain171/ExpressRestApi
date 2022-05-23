const express = require("express");
const routes = require("./routes");
const productRoute = require("./routes/productRoute");
const app = express();

app.use(routes)
app.use(productRoute)
app.set('view engine','ejs')
app.use(express.static('public'))

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
