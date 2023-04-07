const express = require('express');
const routes = express.Router()
const Details = require('../model/user')
const slider = require('../model/slider')
const contact = require('../model/contact')

routes.get('/home', async (req,res)=>{
   const details = await  Details.findOne({_id:"642b261f4f3bacd6a6087e79"})
   const slide = await slider.findOne({_id:"642be91ffcb6ad9070f46fa8"})
    res.render("index.hbs",{
        details:details,
        slides: slide
    })
});

routes.get('/gallery', async(req,res)=>{
    const details = await  Details.findOne({"_id":"642b261f4f3bacd6a6087e79"})
    res.render("gallery.hbs",{
        details:details
    })
})

routes.post('/process-contact-form', async(req,res)=>{

    try {
        res.render('sucess.hbs')
            const Data = await contact.create(req.body)
    } catch (error) {
        res.render('error.hbs')
    }
    })

module.exports= routes;
