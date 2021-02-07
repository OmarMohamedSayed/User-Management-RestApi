import express from 'express';
import bodyParser from 'body-parser';
import userroute from './routes/users.js';
//init app and port
const app = express();
const PORT = 5000;
//using json body
app.use(bodyParser.json());
app.use('/users',userroute)
app.get('/', (req, res) => { 
    res.send('Hello from home')
})

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`))
