import service from '../services/users.service.js'

async function registerUser(req, res) {
    try {
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

        const error = await service.registerUserService(username, password);

        if (error) {
            return res.status(422).json({
                message: error.details
            })
        }

        res.status(201).json({
            message: "user created successfully."
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Internal Server Error"
        })
    }
}

export default {
    registerUser
}


