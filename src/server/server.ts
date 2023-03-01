import express from 'express';


const path = require('path');
const app = express();
const authController = require('./Controllers/authController');
const messageController = require('./Controllers/messageController');
const PORT = 3001;
const cookieParser = require('cookie-parser');


app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());

const userRouter = express.Router();
app.use('/messages', userRouter);

//Route to index.html
app.get('/', authController.login, (req, res) => {
    console.log("you are here")
    res.status(200).sendFile(path.join(__dirname, '../client/index.html'))
}
);

//sign up
userRouter.post('/signup', authController.signup, (req, res) => {
    res.status(200).json(res.locals.newUser)
})

//sign in
userRouter.get('/login', authController.login, (req, res) => {
    res.status(200).json(res.locals.newUser)
})

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

//Login
userRouter.get('/login', authController.login, (req, res) => res.status(200).json(res.locals.login));

//On login go to index.html


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