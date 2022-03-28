let users = require('/data.js')

class User{
    constructor(data){
        this.username = data.username;
        this.password = data.password;
        this.habits = data.habits;
    }
    static create (user){
        return new Promise (async (resolve,reject) => {
            try {
                let newUserData = await db.query('INSERT INTO users (username,password,)')
            } catch {
                
            }
        })
    }
}
