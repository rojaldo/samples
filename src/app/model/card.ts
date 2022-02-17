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
        this.shuffle();
    }

    shuffle(){
        for (let i = this.answers.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.answers[i], this.answers[j]] = [this.answers[j], this.answers[i]];
        }
    }
    

    sendResponse(answer: string){
        this.rightResponded = this.rightAnswer === answer;
        this.userAnswer = answer;
    }
}