import express from 'express';
import usersRoutes from './routes/users.routes.js'
import messagesRoutes from './routes/messages.routes.js'

const port = process.env.SERVER_PORT
const app = express();
app.use(express.json())

app.use('/users', usersRoutes)
app.use('/messages', messagesRoutes)


app.listen(port, () => {
    console.log(`app listening on port ${port}`);
})