const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/book-routes");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use("/books", router); // localhost:5000/books 
app.use(cors());

// I haven't given a password
mongoose.connect("mongodb+srv://admin:<PassWord>@cluster0.jetjcrl.mongodb.net/WizardBooks?retryWrites=true&w=majority")
.then(()=> console.log("Connected To Database"))
.then(()=> {
    app.listen(5000);
}).catch((err)=>{
    console.log(err);
})

// 9817758309
// WizardBooks
// qWujQVjXvJ6GyLwI