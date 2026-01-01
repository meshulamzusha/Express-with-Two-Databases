export function createMessage(username, content, userId) {
    return {
        user_id: userId,
        username: username,
        content: content,
        created_at: new Date().toLocaleString(),
        updated_at: new Date().toLocaleString()
    }
}