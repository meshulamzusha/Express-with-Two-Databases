import { MongoClient } from 'mongodb';

let db;

export async function getMongoDBConection() {
  try {
    const client = new MongoClient(process.env.MONGO_URI);
  
    await client.connect();

    db = client.db(process.env.MONGO_DB_NAME).collection('messages');

    console.log('MongoDB connected');

    return db;
    
  } catch (error) {
    console.log(error);
  }
}
