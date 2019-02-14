import express from 'express';
import auth from './auth';
import condominiumService from '../api/condominiumService';
import authService from '../api/user/authService';

const router = (server) =>{

    /*
        Protected Routes
    */
   const protectedApi = express.Router()
   server.use('/api', protectedApi)
   protectedApi.use(auth)
   condominiumService.register(protectedApi, '/condominium')


   /*
       Open Routes
   */
   const openApi = express.Router()
   server.use('/oapi', openApi)
   openApi.post('/login', authService.login)
   openApi.post('/signup', authService.signup)
   openApi.post('/validateToken', authService.validateToken)
};

export default router;