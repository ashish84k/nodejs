const express = require('express');
const cors = require('cors');
const { TodoRoutes } = require('./Routes/TodoList');
const { DbConnected } = require('./dataBase/dbConnected');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors({}));

app.use(TodoRoutes);




const PORT = 3000;
app.listen(PORT , ()=>{
    try{
        DbConnected();
        console.log(`Server Listen PORT : http://localhost:${PORT}`);
    }catch(err){
        console.log("Database Connection Filed ");
        process.exit(1);
    }
});