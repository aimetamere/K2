import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const connectDB = async () => {
    try {
        const mongoUri =
            process.env.MONGO_CONNECTION_STRING || process.env.MONGODB_URI;

        if (!mongoUri) {
            throw new Error(
                'Missing MongoDB connection string. Set MONGO_CONNECTION_STRING or MONGODB_URI.'
            );
        }

        await mongoose.connect(mongoUri);
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        process.exit(1);
    }
}

connectDB();
