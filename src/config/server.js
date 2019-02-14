import bodyParser from 'body-parser';
import express from 'express';
import allowCors from './cors';
import queryParser from 'express-query-int';
import { port } from '../constants';

const server = express();

// Configuring server, using express framework.

server.use(bodyParser.urlencoded({extended:true}))
server.use(bodyParser.json())
server.use(queryParser())
server.use(allowCors)

server.listen(port,()=>{
    console.log(`API is running on port ${port}.`)
})

export default server;