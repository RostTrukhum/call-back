import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import callBackRouter from './routes/call-back.js'

const PORT = process.env.PORT ?? 3000;

const app = express();
app.use(
  cors({
    origin: '*',
  }),
);
app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(callBackRouter);

const start = async () => {
  try {
    app.listen(PORT, () => {
      console.log(`server has been started at ${PORT}`);
    });
  } catch (e) {
    console.log(e);
  }
};

start();
