const mongoose = require('mongoose');
const mongdbURL = 'mongodb://localhost:27017/local';
const connectDB = async () => {
    try {
        mongoose.set('strictQuery', false);
        await mongoose.connect(mongdbURL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });        
        console.log('MongoDB Connected...');

    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }}
    connectDB()
module.exports = connectDB;