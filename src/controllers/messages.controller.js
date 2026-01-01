import service from '../services/messages.service.js'


async function create(req, res) {
    try {
        const { username, content } = req.body;
        const isInserted = await service.createMessageService(username, content);

        if (!isInserted) {
            return res.status(500).tson({
                message: "Failed to add message."
            })
        }

        res.status(201).json({
            message: "The message was created successfully."
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: error.message,
            message: "Internal server Error"
        })
    }
}


async function getAll(req, res) {
    try {
        const messages = await service.getAllService()

        if (!messages) {
            return res.status(500).json({
                message: "Internal server Error"
            })
        }

        res.status(200).json({
            messages: messages
        })
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: error.message,
            message: "Internal server Error"
        })
    }
}


export default {
    create,
    getAll
}