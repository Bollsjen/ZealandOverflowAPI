export default class QReaction {
    constructor(id, userId, questionId, reaction){
        this.id = id
        this.userId = userId
        this.questionId = questionId
        this.reaction = reaction
        this.created = Math.floor(Date.now() / 1000)
    }
}