import express, {Express} from "express";
import dotenv from 'dotenv';
import cors from 'cors';
import compression from 'compression'

dotenv.config();

console.log(`aaaaaa: ${process.env.TEST_TTT}`);


export const PORT = process.env.PORT || 4000

export const getApp = (): Express => {
    const app = express();

    app.disable('x-powered-by');
    app.use(express.json());
    app.use(compression());

    app.use(cors())

    app.get('/ping', (req, res) => {
        res.send('pong')
    })

    app.post('/', (req, res) => {
        console.log(req.body);
        res.send(req.body)
        
    })

    return app;
}

 