const express = require('express');
const app = express();

app.use(express.static('public/dist'));

app.get('/',(req , res)=>{
    res.sendFile('index.html');
})


app.post('/upload', (req, res) => {
    res.send('<h1>File Uploading Success Full</h1>');
});



const PORT = 3000;
app.listen(PORT , (err)=>{

    if(err){
        console.log("server listen error ");
        return;
    }

    console.log(`server listen port : http://localhost:${PORT}`);
});