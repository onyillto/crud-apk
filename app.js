const express = require("express")
const dotenv = require('dotenv')
const connectDB = require("./config/db");

const app = express()
const PORT = 5000
//Connecting the 
dotenv.config({path: './config/.env'})
connectDB();


app.listen(PORT, () => console.log(`Server Connected to port ${PORT}`))