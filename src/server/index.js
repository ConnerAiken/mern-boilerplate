import express from 'express';
import utils from "./helpers/utils.js";
import path from "path";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userrouter from "../routes/user.routes.js"

global.path = path;
global.dotenv = dotenv;

utils.loadENV();
const app = express();
app.use(express.json());
app.use(express.static(path.resolve(process.cwd(), 'public')))

app.use('/user', userrouter);


//express router and /user
console.log(process.env.MONGO_URL);
//connecting mongoose
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log('MongoDB connected...');
})
.catch(err => console.log(err));


//keep at end
app.listen(process.env.port, () => {
    utils.log(`Server has started and is listening on port ${process.env.port}!`)
});