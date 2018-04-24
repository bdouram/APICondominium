const express = require('express')
const auth = require('./auth')

module.exports = (server) => {

    /*
        Protected Routes
    */
    const protectedApi = express.Router()
    server.use('/api', protectedApi)
    protectedApi.use(auth)

    const condominiumService = require('../api/condominiumService')
    condominiumService.register(protectedApi, '/condominium')


    /*
        Open Routes
    */
    const openApi = express.Router()
    server.use('/oapi', openApi)
    const AuthService = require('../api/user/authService')
    openApi.post('/login', AuthService.login)
    openApi.post('/signup', AuthService.signup)
    openApi.post('/validateToken', AuthService.validateToken)
}