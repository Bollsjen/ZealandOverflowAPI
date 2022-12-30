export class User {
    constructor(id, userName, password){
        this.id = id
        this.userName = userName
        this.password = password
        this.created = Math.floor(Date.now() / 1000)
    }
}