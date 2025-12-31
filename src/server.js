import express from 'express';
import usersRoutes from './routes/users.routes.js'

const port = process.env.SERVER_PORT
const app = express();
app.use(express.json())

app.use('/users', usersRoutes)


app.listen(port, () => {
    console.log(`app listening on port ${port}`);
})