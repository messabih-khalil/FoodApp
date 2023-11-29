import { MongoClient } from 'mongodb';

const MONGODB_URI = 'mongodb://127.0.0.1:27017/foodapp-db';

export const client = new MongoClient(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
