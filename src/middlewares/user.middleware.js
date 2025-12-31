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


export default {
    validateUserFields
}