const mongoose = require("mongoose");


mongoose.set("strictQuery", false);
const connectDB = async () =>{
    try{
        const conn = await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true, 
        })
        console.log('MongoDB Connected')
    }catch(err){
        console.log(err)
        process.exit(1) //once it don't connect to db then it stops the code
    }
}
//export db
module.exports = connectDB