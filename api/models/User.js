const db = require('../dbConfig/init');

class User{
    constructor(data){
        this.user_id = data.user_id;
        this.username = data.username;
        this.email = data.email;
        this.pass_digest = data.pass_digest;
    };

     // get all users
     static get all(){
        return new Promise (async (resolve, reject) => {
            try {
                let userData = await db.query(`SELECT * FROM users;`);
                let users = userData.rows.map(b => new User(b));
                resolve (users);
            } catch (err) {
                reject(`User not found, error: ${err}`);
            }
        });
    };

        // find single user by id and return it
      static findUserById(id){
        return new Promise (async (resolve, reject) => {
            try {
                let userData = await db.query(`SELECT * 
                                                    FROM users
                                                    WHERE users.user_id = $1;`, [ id ]);                                                  
                let user = new User(userData.rows[0]);
                resolve (user);
            } catch (err) {
                reject(`User not found, error: ${err}`);
            }
        });
    };

    // //  return all habits per user id and return them
    //  static findHabitsPerUserId(id){
    //     return new Promise (async (resolve, reject) => {
    //         try {
    //             let habitsData = await db.query(`SELECT *
    //                                              FROM users, habits
    //                                             WHERE users.user_id = habits.user_id 
    //                                             AND users.user_id = $1;`, [ id ]);
    //             let habitUser = new User(habitsData.rows[0]);
    //             resolve (habitUser);
    //         } catch (err) {
    //             reject(`Habits could not be retrieved, error: ${err}`);
    //         }
    //     });
    // };

    // created new user
    static async create(userData){
        return new Promise (async (resolve, reject) => {
            try {
                
                /* 
                const { username, email, pass_digest} = userData;
                let username = userData["username"]
                .........              
                */
                const { username, email, pass_digest} = userData;
                let result= await db.query(`INSERT INTO users (username, email, pass_digest)    
                VALUES($1, $2, $3) RETURNING *;`,[username, email, pass_digest]);
                console.log(result)                
                resolve (result.rows[0]);
            } catch (err) {
                reject(`User could not be created, error: ${err}`);
            }
        });
    };

    // utilized in controllers/auth.js
    static findByEmail(email){
        return new Promise(async (res, rej) => {
            try {
                let result = await db.run(SQL`SELECT * FROM users
                                                WHERE email = ${email};`);
                let user = new User(result.rows[0])
                res(user)
            } catch (err) {
                rej(`Error retrieving user: ${err}`)
            }
        })
    }
};


module.exports = User;
