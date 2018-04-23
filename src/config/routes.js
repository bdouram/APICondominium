const express = require ('express')
module.exports = (server)=>{
    
    // API Routes
    const router = express.Router()
    server.use('/api',router)

    // Condominium Routes
    const condominiumService = require('../api/condominiumService')
    condominiumService.register(router,'/condominium')
}