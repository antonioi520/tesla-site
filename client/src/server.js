import Express from "express";
//import Express from 'express';
const app = new Express();

const PORT = process.env.PORT || 3000;


app.get('/', (req, res)=> {
    res.send("Hello");
});

app.listen(PORT,()=>{
    console.log(`Server running on PORT ${PORT}`);
});