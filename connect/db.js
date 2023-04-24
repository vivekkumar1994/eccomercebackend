import mongoose from "mongoose";
import colors from "colors";


const connectdb =  async() => {
    try{
        const conn = await mongoose.connect(process.env.MONO_URL)
        console.log(`connected to database ${conn.connection.host}`.bgMagenta.white)

    }
    catch(err){
        console.log(`err in mongodb ${err}`.bgRed.white);

    }
}

export default  connectdb;