import service from '../services/users.service.js'


function validateUserFields(req, res, next) {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({
            message: "username or password is missing in request body."
        })
    }

    if (typeof username != 'string') {
        return res.status(400).json({
            message: "Type of username must be string"
        })
    }

    if (typeof password != 'string') {
        return res.status(400).json({
            message: "Type of password must be string"
        })
    }

    next()
}


async function authenticateUser(req, res, next) {
    try {
        const { username, password } = req.body;
        const user = await service.getUserByUsername(username);

        if (!user) {
            return res.status(404).json({
                message: `user with ${username} not exist`
            })
        }
        
        if (user.password != password) {
            return res.status(401).json({
                message: "Username exists but password is incorrect."
            })
        }

        next()

    } catch (error) {
        return res.status(500).json({
            error: error.message,
            message: "Internal server Error"
        })
    }
}


export default {
    validateUserFields,
    authenticateUser
}