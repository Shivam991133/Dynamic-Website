const mongoose = require('mongoose');
const slider = mongoose.Schema({
    slider:[{
        title:{
            type:String
        },
        subTittle:{
            type:String
        },
        imageUrl:{
            type:String
        },
        class:{
            type:String
        }
       
    }],
    value:{
        type:Boolean,
        default:true
    }
   
})

const silderData = mongoose.model('slider', slider);
module.exports = silderData;

silderData.findOne({ value: true }, (err, result) => {
    if (err) {
        console.log(`Data not Found`, err.message)
    } else if (result) {
        console.log(`Data Already Exist silder`)
    } else {
        let Data = {
            slider:[
                {
                    title:"First Heading",
                    subTittle:"First SubTittle",
                    imageUrl:"/static/images/1st.jpg"
                },
                {
                    title:"second Heading",
                    subTittle:"second SubTittle",
                    imageUrl:"/static/images/2nd.jpg"
                },
                {
                    title:"Third Heading",
                    subTittle:"third SubTittle",
                    imageUrl:"/static/images/3rd.jpg"
                }
                
            ]
        }
        silderData.create(Data, (err, res) => {
            if (err) {
                console.log('error while Create', err.message)
            } else {
                console.log('static Slider is saved', res)
            }
        })
    }
})

