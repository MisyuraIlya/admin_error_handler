
import express from 'express';
import db from './db/config.js';
import dotenv from 'dotenv';

import routerError from './routes/index.js';
const app = express();
app.use(express.json());
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