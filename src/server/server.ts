import express from 'express';


const path = require('path');
const app = express();
const authController = require('./Controllers/authController');
const messageController = require('./Controllers/messageController');
const PORT = 3001;


app.use(express.json());
app.use(express.urlencoded({extended: true}));

const userRouter = express.Router();
app.use('/messages', userRouter);

//create new message
userRouter.post('/postMessage', messageController.postMessage, (req, res) => {
    res.status(200).json(res.locals.newMessage);
});

//Get messages
userRouter.get('/getMessages', messageController.getMessages, (req, res) => {
    res.status(200).json(res.locals.messages);
});

//Update messages
userRouter.patch('/updateMessage', messageController.updateMessage, (req, res) => {
    res.status(200).json(res.locals.updatedMessage);
});

//Delete messages
userRouter.delete('/deleteMessage', messageController.deleteMessage, (req, res) => {
    res.status(200).json(res.locals.deletedMessage);
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../client/index.html')));

app.get('*', (req, res) => res.status(404).send('Page not found'));

app.use((err:any, req:any, res:any, next:any) => {
    const defaultErr = {
        log: 'Express error handler caught unknown middleware error',
        status: 500,
        message: {err: 'An error occurred'},
    };
    const errorObj = Object.assign({}, defaultErr, err);
    console.log(errorObj.log);
    return res.status(errorObj.status).json(errorObj.message)
;})

app.listen(PORT, () => console.log(`server is listening on port ${PORT}`));