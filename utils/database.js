import mongoose from 'mongoose';

let isConnected = false;

export const connectToDb = async () => {
    mongoose.set('strictQuery', true);

    if(isConnected){
        console.log("MongoDb is already connected");
        return;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: 'passorganizer',
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })

        isConnected = true;
        console.log('Mongo DB connected');
    } catch (error) {
        console.log(error);
    }
}