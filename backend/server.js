const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require('body-parser')

require("dotenv").config();

const app = express();
const port = process.env.PORT || 8071;                      //8070 port eka naththam wena danata usable port ekak ganna

app.use(cors());
// app.use(express.json());
app.use(bodyParser.json({limit: '10mb'}));
app.use(bodyParser.urlencoded({extended:true, limit:'10mb'}));

const URL = process.env.MONGODB_URL;

mongoose.connect(URL,{});

const connection = mongoose.connection;

connection.once("open", () =>{
    console.log("Mongodb Connection Success!");
})

//import all routes
const ItemRouter = require("./routes/Items.route.js");
app.use("/item",ItemRouter);                          //1st parameter req name

const SaleRouter = require('./routes/Sale.route.js');
app.use('/sale',SaleRouter);

const storeRequestRout = require('./routes/storerequests.js');
app.use('/storerequest',storeRequestRout);

const employeeRouter = require('./routes/Employees.js');
app.use('/employee',employeeRouter);

const storeRouter = require('./routes//Store.route.js');
app.use('/store',storeRouter);

app.listen(port, () => {
    console.log(`Server is up and running on port ${port}`);
})
