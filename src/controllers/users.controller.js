import service from '../services/users.service.js'

async function registerUser(req, res) {
    try {
        const { username, password } = req.body;

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


