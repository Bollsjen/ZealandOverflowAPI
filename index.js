import express from 'express'
import AnswerController from './controllers/AnswerController.js'
import EducationController from './controllers/EducationController.js'
import { QuestionsController } from './controllers/QuestionsController.js'
import UserController from './controllers/UserController.js'
import AnswersRepository from './managers/AnswerRepository.js'
import QuestionsManager from './managers/QuestionManager.js'
import { UserManager } from './managers/UserManager.js'
const app = express()
const PORT = 3000

app.use(express.json())

const qManager = new QuestionsManager()
const aManager = new AnswersRepository()
const uManager = new UserManager()
const qController = new QuestionsController(app, qManager)
const eController = new EducationController(app, qManager)
const aController = new AnswerController(app,aManager)
const uController = new UserController(app, uManager)

app.listen(
    PORT,
    () => console.log(`Listening on localhost:${PORT}`)
)