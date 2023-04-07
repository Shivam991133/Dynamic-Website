const mongoose = require('mongoose');
const details = new mongoose.Schema({
    brandName: {
        type: String
    },
    brandIconUrl: {
        type: String
    },
    value: {
        type: Number,
        default: 2
    },
    links: [
        {
            label: String,
            url: String
        }
    ]
});
const staticData = mongoose.model('data', details)
module.exports = staticData;

staticData.findOne({ value: 2 }, (err, result) => {
    if (err) {
        console.log("Data Not Found", err.message)
    } else if (result) {
        console.log('Data Already Exist')
    } else {
        let data = {
            brandName: "Shivam",
            brandIconUrl: "https://www.w3schools.com/css/img_5terre.jpg",
            links: [
                {
                    label: "Home",
                    url: "/home"
                },
                {
                    label: "Gallery",
                    url: "/gallery"
                },
                {
                    label:"Contact",
                    url:"/contact"
                },
                {
                    label: "About",
                    url:"/about"
                }
                    
            ]
        }
        staticData.create(data, (err, res) => {
            if (err) {
                console.log("error" ,err.message);
            } else {
                console.log("static content is saved default", res);
            }
        })
    }
});