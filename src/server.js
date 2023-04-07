const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const hbs = require('hbs');
const dbConnection =  require('./database/dbConnection');
const routes = require('../src/routes/main');
const model = require('../src/model/user')
const silderData = require('../src/model/slider')
const service = require('../src/model/services')

// Form Data Get
app.use(express.json());
app.use(express.urlencoded({extended:true}));



// ==========>  Static File Excuss
app.use('/static',express.static("public"));

//    ======> Routes setUp
app.use('',routes);
app.use('/',routes)



// =========>   Template Engine
app.set('view engine','hbs');
app.set('views','views');
hbs.registerPartials('views/partails')







app.listen(PORT ,()=>{
    console.log(`Server is Running on PORT ${PORT}`)
})


