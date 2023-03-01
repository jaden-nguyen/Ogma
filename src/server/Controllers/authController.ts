const dbb = require('../Models/Model');

module.exports = {
  signup: function (req:any, res:any, next:any) {
    const {username, name, password} = req.body;
    const options = [username, name, password];
    const queryStr = 'INSERT INTO users (username, name, password) VALUES ($1, $2, $3)'
    dbb.query(queryStr, options)
      .then((data:any) => {
        console.log('Signed up :)');
        // res.cookie()
        res.locals.newUser = data.rows;
        return next();
      })
      .catch((err:any) => {
        console.log("error in signup", err);
        return next(err);
      })
  },

  login: function (req:any, res:any, next:any) {
    const {username, password} = req.body;
    const singleQUsername = username.replace(/"/g, "'");
    const details = [singleQUsername];
    const checkUserDetails = 
    // `SELECT * FROM users WHERE username = ${singleQUsername}`;
    'SELECT * FROM users WHERE username = $1';
    // 'SELECT * FROM conversations (username, password) VALUES ($1, $2)';
    dbb.query(checkUserDetails, details)
    .then((data:any) => {
        if(data.rows) {
            if(password === data.rows[0].password){
                console.log('you just logged in');
                res.cookie('token', data.rows[0].userid)
                return next()
            } else {
                // res.status(401).send('no :)');
                res.redirect('/messages/signup')
                // return next('wrong password')
            }
        }else {
            res.status(401).send('no :)')
        } 
    })
    .catch((err:any) => {
        console.log("error in login", err);
        return next(err);
    })
    

    
  },

}