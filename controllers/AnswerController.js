export default class AnswerController {
    constructor(app, manager){
        const URI = "/api/Answers"

        //
        // Get all Questions
        //Answers
        app.get(URI, (req, res) => {
            res.type('json')
            res.charset = 'utf-8'
            res.json(manager.GetAllAnswers())
        })

        
        
        //
        //  Get all Answer Replies
        //
        app.get(URI + '/Replies', (req, res) => {
            res.type('json')
            res.charset = 'utf-8'
            res.json(manager.GetAllReplies())
        })

        
        
        //
        //    Get Answers by id
        //
        app.get(URI + '/:id', (req, res) => {
            let {id} = req.params
        
            try{
                id = Number(id)
            }catch(error){
                res.status(400).send({message: 'Id has to be of type integer'})
            }
        
            if(!Number.isInteger(id)) res.status(404).send({message: 'Id has to be of type integer'})
            res.type('json')
            res.charset = 'utf-8'
            res.json(manager.GetAnswerById(id))
        })




        //
        //    Get Answers by id
        //
        app.get(URI + '/by/question/:id', (req, res) => {
            let {id} = req.params
        
            try{
                id = Number(id)
            }catch(error){
                res.status(400).send({message: 'Id has to be of type integer'})
            }
        
            if(!Number.isInteger(id)) res.status(404).send({message: 'Id has to be of type integer'})
            res.type('json')
            res.charset = 'utf-8'
            res.json(manager.GetAllAnswersByQuestionId(id))
        })

        
        
        //
        //  Get all Answer Replies by id
        //
        app.get(URI + '/Replies/:id', (req, res) => {
            let {id} = req.params
        
            try{
                id = Number(id)
            }catch(error){
                res.status(400).send({message: 'Id has to be of type integer'})
            }
        
            if(!Number.isInteger(id)) res.status(404).send({message: 'Id has to be of type integer'})
            res.type('json')
            res.charset = 'utf-8'
            res.json(manager.GetAllRepliesById(id))
        })

        
        
        //
        //  Create Answer
        //
        app.post(URI, (req, res) => {
            const {answer} = req.body
        
            if(!answer){
                res.status(418).send({message: 'We need a body of at least one tag'})
            }
        
            res.type('json')
            res.charset = 'utf-8'
            res.json(manager.CreateAnswer(answer))
        })

        
        
        //
        //  Create Answer Reply
        //
        app.post(URI + '/Replies', (req, res) => {
            const {reply} = req.body
        
            if(!reply){
                res.status(418).send({message: 'We need a body of at least one tag'})
            }
        
            res.type('json')
            res.charset = 'utf-8'
            res.json(manager.CreateReply(reply))
        })

        
        
        //
        //  Update Answer
        //
        app.put(URI + '/:id', (req, res) => {
            let  {id} = req.params
            const {answer} = req.body
        
            try{
                id = Number(id)
            }catch(error){
                res.status(400).send({message: 'Id has to be of type integer'})
            }
        
            if(!Number.isInteger(id)) res.status(404).send({message: 'Id has to be of type integer'})
        
            if(!answer){
                res.status(418).send({message: 'We need a body of at least one tag'})
            }
        
            res.type('json')
            res.charset = 'utf-8'
            res.json(manager.UpdateAnswer(id, answer))
        })

        
        
        //
        //  Update Answer Reply
        //
        app.put(URI + '/Replies/:id', (req, res) => {
            let  {id} = req.params
            const {reply} = req.body
        
            try{
                id = Number(id)
            }catch(error){
                res.status(400).send({message: 'Id has to be of type integer'})
            }
        
            if(!Number.isInteger(id)) res.status(404).send({message: 'Id has to be of type integer'})
        
            if(!reply){
                res.status(418).send({message: 'We need a body of at least one tag'})
            }
        
            res.type('json')
            res.charset = 'utf-8'
            res.json(manager.UpdateReply(id, reply))
        })

        
        
        //
        //  Remove Answer
        //
        app.delete(URI + '/:id', (req,res) => {
            let  {id} = req.params
            const {answer} = req.body
        
            try{
                id = Number(id)
            }catch(error){
                res.status(400).send({message: 'Id has to be of type integer'})
            }
        
            if(!Number.isInteger(id)) res.status(404).send({message: 'Id has to be of type integer'})
        
            if(!answer){
                res.status(418).send({message: 'We need a body of at least one tag'})
            }
        
            res.type('json')
            res.charset = 'utf-8'
            res.json(manager.RemoveAnswer(id, answer))
        })

        
        
        //
        //  Remove Answer Reply
        //
        app.delete(URI + '/:id', (req,res) => {
            let  {id} = req.params
            const {reply} = req.body
        
            try{
                id = Number(id)
            }catch(error){
                res.status(400).send({message: 'Id has to be of type integer'})
            }
        
            if(!Number.isInteger(id)) res.status(404).send({message: 'Id has to be of type integer'})
        
            if(!reply){
                res.status(418).send({message: 'We need a body of at least one tag'})
            }
        
            res.type('json')
            res.charset = 'utf-8'
            res.json(manager.RemoveReply(id, reply))
        })
    }
}