const express = require("express");
const mongoose = require("mongoose");
const Product = require("./product.models.js");
const productRoutes = require("./routes/product.route.js");
const app = express();
//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use("/api/products", productRoutes);

app.listen(3000, () => {
  console.log("server is running on Port 3000");
});

mongoose
  .connect(
    "mongodb+srv://pkobenj41:rUN8LwKf7thdBb36@cluster0.nzolphz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("You have successfully connencted to database!");
  })
  .catch(() => {
    console.log("connection failed!");
  });
