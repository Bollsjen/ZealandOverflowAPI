import multer from 'multer'

const storage = multer.diskStorage({
    destination(req, file, callback) {
      callback(null, './images');
    },
    filename(req, file, callback) {
      callback(null, `${file.fieldname}_${Date.now()}_${file.originalname}`);
    },
  });

export class QuestionsController {
    constructor(app, manager){
        const URI = "/api/Questions"

        //
        // Get all Questions
        //
        app.get(URI, (req, res) => {
            try{
                res.type('json')
                res.charset = 'utf-8'
                res.json(manager.GetAllQuestions())
            }catch(error){
                console.log(error)
            }
        })
        
        
        //
        //    Get Questions by id
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
            res.json(manager.GetAllQuestionsById(id))
        })

        
        
        //
        // Get Questions by userId
        //
        app.get(URI + '/by/userId/:id', (req,res) => {
            let {id} = req.params
        
            res.type('json')
            res.charset = 'utf-8'
            res.json(manager.GetAllQuestionsByUserId(id))
        })
        
        
        
        //
        //  Get Questions by tags
        //
        app.get(URI + '/by/tags', (req, res) => {
            const { tags } = req.body
            if(!tags){
                res.status(418).send({message: 'We need a body of at least one tag'})
            }
        
            res.type('json')
            res.charset = 'utf-8'
            res.json(manager.GetAllQuestionsByTags(tags))
        })
        
        
        
        //
        //  Get Questions by education id
        //
        app.get(URI + '/by/educationId/:id', (req, res) => {
            let {id} = req.params
        
            try{
                id = Number(id)
            }catch(error){
                res.status(400).send({message: 'Id has to be of type integer'})
            }
        
            if(!Number.isInteger(id)) res.status(404).send({message: 'Id has to be of type integer'})
        
            res.type('json')
            res.charset = 'utf-8'
            res.json(manager.GetAllQuestionsByEducation(id))
        })
        
        
        
        //
        //  Post create Question
        //
        app.post(URI, (req,res) => {
            const {question} = req.body
        
            if(!question){
                res.status(418).send({message: 'We need a body of at least one tag'})
            }
        
            res.type('json')
            res.charset = 'utf-8'
            res.json(manager.CreateQuestion(question))
        })

        const upload = multer({ storage });

        
        
        //
        //  Post upload image
        //
        app.post('/api/upload', upload.array('photo', 3), (req,res) => {
            console.log('file', req.files)
            console.log('body', req.body)
            res.status(200).json({
                message: 'success!'
            })
        })
        
        
        
        //
        //  Put update Question
        //
        app.put(URI + '/:id', (req,res) => {
        
            let  {id} = req.params
            const {question} = req.body
        
            try{
                id = Number(id)
            }catch(error){
                res.status(400).send({message: 'Id has to be of type integer'})
            }
        
            if(!Number.isInteger(id)) res.status(404).send({message: 'Id has to be of type integer'})
        
            if(!question){
                res.status(418).send({message: 'We need a body of at least one tag'})
            }
        
            res.type('json')
            res.charset = 'utf-8'
            res.json(manager.UpdateQuestion(id, question))
        })
        
        
        
        //
        // Delete Question
        //
        app.delete(URI + '/:id', (req,res) => {
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
            res.json(manager.RemoveQuestion(id, user))
        })
    }
}