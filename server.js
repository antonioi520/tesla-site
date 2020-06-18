import Express from "express";
const app = new Express();
import cors from "cors";
import bodyParser from "body-parser";


const PORT = process.env.PORT || 4000;

app.use(bodyParser.json())
app.use(cors())
app.use(bodyParser.urlencoded({extended:false}))

app.get('/', (req, res)=> {
    res.send("Hello");
});


import User1 from './routes/Users.js';
app.use('/users', User1);

import Listing1 from './routes/Listings.js';
app.use('/listing', Listing1);



app.listen(PORT,()=>{
    console.log(`Server running on PORT ${PORT}`);
});

// create a GET route test
app.get('/express_backend', (req, res) => {
    res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});
