const mongoose = require('mongoose');
const service = mongoose.Schema({
    value: { type: Boolean, default: true },
    card: [{
        tittle: { type: String },
        description: { type: String },
        linkText: { type: String },
        link: { type: String }
    }]
})

const serviceData = mongoose.model('Service', service)
module.exports = serviceData;

serviceData.findOne({ value: true }, (err, result) => {
    if (err) {
        console.log(`Data is Not found`, err.message)
    } else if (result) {
        console.log(`Data is Already Exist`)
    } else {
        let data = {
            card: [
                {
                    tittle: "first Tittle",
                    description: "first Description",
                    linkText: 'First linkText',
                    link: "First link"
                },
                {
                    tittle: "Second Tittle",
                    description: "Second Description",
                    linkText: 'Second linkText',
                    link: "Second link"
                },
            ]
        }
        serviceData.create(data, (err, result) => {
            if (err) {
                console.log(`Data Save Error`, err.message)
            } else {
                console.log(`Data save Succesfully`, result)
            }
        })
    }
})



