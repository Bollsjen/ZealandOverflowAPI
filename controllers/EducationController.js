export default class EducationController {
    constructor(app, manager) {
        const URI = "/api/Educations"

        //
        // Get all Educations
        //
        app.get(URI, (req, res) => {
            res.type('json')
            res.charset = 'utf-8'
            res.json(manager.GetAllEducations())
        })



        //
        // Get Educations by Id
        //
        app.get(URI + '/:id', (req, res) => {
            let {id} = req.params
        
            try{
                id = Number(id)
            }catch(error){
                res.status(400).send({message: 'Id has to be of type integer'})
                return
            }
            const data = manager.GetEducationById(parseInt(id))
            console.log(data)
            if(data != [] && data != undefined && data != null && typeof data != TypeError){
                res.json(data)
                res.type('json')
                res.charset = 'utf-8'
                return
            }
            else{
                res.status(404).send('Not found');
                return
            }
        })
    }
}