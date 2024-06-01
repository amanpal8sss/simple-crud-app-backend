const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product_model.js");
const productRoute = require("./routes/product_route.js");
const app = express();

//middleware for json use
app.use(express.json())


//routes
app.use('/api/products', productRoute);


app.get("/", (req, res) => {
  res.send("Hello from node chihii API!");
});


mongoose.connect(
  "mongodb+srv://amanpal8sss76:FkyysM3L5s4HDSp2@backenddb.fuumdse.mongodb.net/Node-API?retryWrites=true&w=majority&appName=backendDB"
)
.then(()=>{
  console.log("connected!");
  app.listen(3000, () => {
    console.log("Hello World!");
  });
})

.catch(()=>{
  console.log("connection Failed!")
})