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


async function getUserByUsername(username) {
    try {
        const { data, error } = await supabase
            .from('users')
            .select()
            .eq('username', username)
            .single()

        if (error) {
            console.log(error);
        }

        return data

    } catch (error) {
        throw error
    }
}


async function loginService(username, password) {
    try {
        let success = false;
        const user = await getUserByUsername(username);
        
        if (user && user.password == password) {
            success = true;
        }

        return success;

    } catch (error) {
        console.log(error);
    }
}


export default {
    registerUserService,
    getUserByUsername,
    loginService
}
