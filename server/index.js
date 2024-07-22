import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import cookieParser from 'cookie-parser'
import mongoose from 'mongoose'
import authRoutes from './routes/AuthRoutes.js'

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;
const databaseURL = process.env.DATABASE_URL;

// CORS (Cross-Origin Resource Sharing)
app.use(cors({
    origin: [process.env.ORIGIN],
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json());

app.use('/api/auth/', authRoutes)

const server = app.listen(port, ()=>{
  console.log(`Server is running at http://localhost:${port}`);
})

mongoose.connect(databaseURL).then(()=>console.log("DB connection succeeded!!")).catch(err=>console.log(err.message)); // DB connection 과정에서 에러 발생할 경우 catch