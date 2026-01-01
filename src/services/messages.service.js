import { getSupabaseClient } from "../db/supabase.js";
import { getMongoDBConection } from "../db/mongo.js";
import { createMessage } from "../models/message.model.js";

const supabase = getSupabaseClient();
const db = await getMongoDBConection();

async function createMessageService(username, content) {
    try {
        const { data, error } = await supabase
            .from('users')
            .select('id')
            .eq('username', username)
            .single()

        if (error) {
            console.log(error);
            throw error;
        }

        const userId = data.id;
        const message = createMessage(username, content, userId);
        const result = await db.insertOne(message);

        return result.acknowledged;

    } catch (error) {
        console.log(error); 
        throw error;
    }
}


async function getAllService() {
    try {
        const messages = await db
            .find({})
            .sort({ created_at: 1})
            .toArray()  
            
        return messages
        
    } catch (error) {
        throw error
    }
}



export default {
    createMessageService,
    getAllService
}