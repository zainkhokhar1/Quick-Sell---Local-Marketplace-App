import express from "express"
import dotenv from "dotenv"
import { logger } from "./middlewares/logger.middleware.js"
import cors from "cors"

const app = express();
dotenv.config();
app.use(express.json());              // parse JSON body
app.use(express.urlencoded({ extended: true }));
app.use(cors());                      // enable CORS

const port = process.env.PORT || 4000;

app.use(logger);

app.get('/',(req,res)=>{
    res.send({
        status: 200,
        message : `Listening on the port ${port}`
    })
})


app.listen(port,()=>{
    console.log(`App is listening on the port ${port}`)
})