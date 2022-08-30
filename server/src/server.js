const express = require('express');
const apiRouter = require('./routes');
 
const app = express();

app.use(express.json());

app.use('/api/',apiRouter);
app.listen(process.env.PORT || '8085', () => {
    console.log(`Server is running on port : ${process.env.PORT || '8085'}`);
})