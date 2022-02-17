export class Card{
    question = '';
    rightAnswer = '';
    answers: string[] = [];
    responded = false;
    rightResponded!: boolean;
    userAnswer!: string;
    
    constructor(json: any){
        this.question = json.question;
        this.rightAnswer = json.correct_answer;
        this.answers = json.incorrect_answers;
        this.answers.push(this.rightAnswer);
    }

    sendResponse(answer: string){
        this.rightResponded = this.rightAnswer === answer;
        this.userAnswer = answer;
    }
}