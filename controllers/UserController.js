export default class UserController {
    constructor(app, manager){
        const URI = "/api/Users"

        //
        // Get all Users
        //
        app.get(URI, (req, res) => {
            res.type('json')
            res.charset = 'utf-8'
            res.json(manager.GetAllUsers())
        })



        //
        //    Get Users by id
        //
        app.get(URI + '/by/id/:id', (req, res) => {
            let {id} = req.params
        
            try{
                id = Number(id)
            }catch(error){
                res.status(400).send({message: 'Id has to be of type integer'})
            }
        
            if(!Number.isInteger(id)) res.status(404).send({message: 'Id has to be of type integer'})
            res.type('json')
            res.charset = 'utf-8'
            res.json(manager.GetUserById(id))
        })




        //
        //    Get Users by username and password
        //
        app.post(URI + '/signin', (req, res) => {
            console.log('body', req.body)
            let {username, password} = req.body
            console.log('username', username)
        
            if(typeof username !== 'string'){ res.status(404).send({message: 'Username has to be of type string'}); return}
            res.type('json')
            res.charset = 'utf-8'
            res.json(manager.GetUserByUsernameAndPassword(username,password))
        })



        //
        //  Create User
        //
        app.post(URI, (req, res) => {
            const {user} = req.body
        
            if(!user){
                res.status(418).send({message: 'We need a body of at least one tag'})
            }
        
            res.type('json')
            res.charset = 'utf-8'
            res.json(manager.CreateUser(user))
        })




        //
        //  Update User
        //
        app.put(URI + '/:id', (req, res) => {
            let  {id} = req.params
            const {user} = req.body
        
            try{
                id = Number(id)
            }catch(error){
                res.status(400).send({message: 'Id has to be of type integer'})
            }
        
            if(!Number.isInteger(id)) res.status(404).send({message: 'Id has to be of type integer'})
        
            if(!user){
                res.status(418).send({message: 'We need a body of at least one tag'})
            }
        
            res.type('json')
            res.charset = 'utf-8'
            res.json(manager.UpdateUser(id, user))
        })
    }
}