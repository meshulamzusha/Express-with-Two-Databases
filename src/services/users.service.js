import { getSupabaseClient } from "../db/supabase.js"
import { createUser } from "../models/user.model.js";

const supabase = getSupabaseClient();

async function registerUserService(username, password) {
    try {
        const user = createUser(username, password);

        const { error } = await supabase
            .from('users')
            .insert(user)

        return error
        
    } catch (error) {
        throw error
    }
}

export default {
    registerUserService
}
