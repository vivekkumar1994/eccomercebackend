import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectdb from "./connect/db.js";
import authRoutes from "./routes/authRoutes.js"
import categoryRoutes from "./routes/categoryRoutes.js";
import productRoutes from "./routes/productRoutes.js";


const app = express();
dotenv.config()


app.use(express.json());
app.use(morgan("dev"));
app.use('/api/authroutes',authRoutes)
app.use('/api/category',categoryRoutes)
app.use('/api/product', productRoutes);

// database connected
connectdb()


app.get("/",(req,res) => {
    res.send(`<h2>welcome to my website</h2>`)
})

const port = process.env.PORT

app.listen(port,() => {
    console.log(`server running on ${port}`.bgCyan.black)
})