
import express from 'express';
import db from './db/config.js';
import dotenv from 'dotenv';
import cors from "cors";
import routerError from './routes/index.js';
import paginate from 'express-paginate'

const app = express();

app.use(cors({
  'origin': true,
  'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
  'credentials': false,
  'preflightContinue': false,
  exposedHeaders: ['Content-Range']
}));


app.use(express.json());
app.use(paginate.middleware(10, 50));

app.use('/api', routerError)



async function startMysqlAndServer() {
    try {
      await db.connect((err) => { if (err) throw err; console.log('DB Connected!'); });
      app.listen(process.env.PORT || '8085', () => { console.log(`Server is running on port : ${process.env.PORT || '8085'}`); });
    } catch (error) {
      console.log(error);
    }
  }


  startMysqlAndServer()