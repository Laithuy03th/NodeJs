import express from 'express';
let router = express.Router();
import { getHomePage } from '../controller/homeController';

const initWebRouter = (app)=>{
    router.get('/',getHomePage) ;

    router.get('/abc',(req,res)=>{
        res.send("i'm Thuy");
    })

      return app.use('/', router);
}

module.exports = initWebRouter;
