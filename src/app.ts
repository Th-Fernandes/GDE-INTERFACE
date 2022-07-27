import express from 'express';
import indexRouter from "./backend/routes/index";
import registerRouter from "./backend/routes/register";

const app = express();
const port = 3000;

//ROUTER CONFIG
app.use('/', indexRouter )
app.use('/register', registerRouter)
    
app.listen(port);