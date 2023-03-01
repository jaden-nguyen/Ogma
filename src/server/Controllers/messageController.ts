const db = require('../Models/Conversations');

module.exports = {
    //Post messages
    postMessage: function (req:any, res:any, next:any) {
        const {title, convo, user_Id} = req.body;
        const postMessage = `INSERT INTO conversations (title, convo, user_Id)
        VALUES ($1, $2, $3)`;
        const values = [title, convo, user_Id];

        db.query(postMessage, values)
        .then((messageData:any) => {
            res.locals.newMessage = messageData;
            next()
        })
        .catch((err:any) => {
            console.log('error in postMessage: ', err);
            next(err)
        })

        // try {
        //     await db.query(postMessage, values);
        //     res.locals.newMessage 
        //     return next();
        // } catch (error) {
        //     return next({error: error.message})
        // }
    },

    getMessages: function (req: any, res: any, next: any) {
        const user_Id = req.body.user_Id;
        // console.log('this is the id', user_Id)
        const messagesQuery = `SELECT * FROM conversations WHERE user_Id = ${user_Id}`;
         db.query(messagesQuery)
           .then ((data:any) => {
            console.log("data rows: ",data.rows)
            res.locals.messages = data.rows;
            return next();
           })
           .catch((err:any) =>  {
          console.log('error in getMessages', err);
          return next({error: err.message})
        })
      },

    //Update messages
    updateMessage: function (req:any, res:any, next:any) {
        const { convo, convoid } = req.body;
        const values = [convo, convoid];
        const messagesQuery = `UPDATE conversations SET convo = $1 WHERE convoid = $2`;
      db.query(messagesQuery, values)
        .then((data:any) => {
            console.log(data);
            res.locals.updatedMessage = data.rows;
            return next();
        })
         .catch((error:any) => {
            console.log('error in updateMessage: ',  error);
            return next({error: error.message});
        })
    },

    //Delete messages

    deleteMessage: function (req:any, res:any, next:any) {
        const convoid = req.body.convoid;
        // console.log('this is the id', user_Id)
        const messagesQuery = `DELETE FROM conversations WHERE convoid = ${convoid}`;
        
        db.query(messagesQuery)
          .then((data:any) => {
              console.log(data);
              res.locals.deletedMessage = data.rows;
              return next();
          })
           .catch((error:any) => {
              console.log('error in deleteMessage: ', error);
              return next({error: error.message});
          })
      },

}