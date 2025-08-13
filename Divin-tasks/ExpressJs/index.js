const express = require('express');
const userRouter = require('./Routers/user');
const app = express();

app.use(userRouter)


app.get('/' , (req , res)=>{
    res.send('<h1>Server Is Started</h1>');
})


const PORT = 3000;
app.listen(PORT , (req , res)=>{
    console.log(`Server Is Listen PORT : http://localhost:${PORT}`);
});