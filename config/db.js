const mongoose = require('mongose');

mongoose.set('strictQuery', false);

const connectDBDB = async() => {
    try {
        const connection = await mongoose.connect(process.env.MONGO_URL);
        console.log(`Connect to MongoDB ${connection.connection.host}`);
    } catch (error) {
        console.log('Nepavyko prisijungti', error);
        process.exit(1);
    }
}

module.expots = connectDB;