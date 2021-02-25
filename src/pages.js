const orphanages = require('./database/fakedata.js');

module.exports = {
    index(request, response) {
        return response.render('index')
    },

    orphanage(req, res){
        return res.render('orphanage')
    },

    orphanages(req, res){
        return res.render('orphanages', { orphanages })
    },

    createOrphanage(req, res){
        return res.render('create-orphanage')
    }
}