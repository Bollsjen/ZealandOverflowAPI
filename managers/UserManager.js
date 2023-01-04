import { User } from "../models/User.js"
import { v4 as uuidv4 } from 'uuid'

export class UserManager{
    static _nextId = 0
    static _users = [
        new User(uuidv4(), "økonomen", "1234", null),
        new User(uuidv4(), "datamatikeren1", "1234", null),
        new User(uuidv4(), "laboranten", "1234", null),
        new User(uuidv4(), "datamatikeren2", "1234", null),
    ]

    GetAllUsers(){
        return UserManager._users
    }

    GetUserById(id){
        return UserManager._users.filter(u => u.id == id)
    }

    CreateUser(user){
        UserRepository._users.push(user)
        return UserManager._users[UserRepository._users.length-1]
    }

    GetUserByUsernameAndPassword(username, password){
        return UserManager._users.filter((u) => u.userName == username && u.password == password)
    }
}