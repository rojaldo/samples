export class Apod {
    title = '';
    date = '';
    explanation = '';
    url = '';
    hdurl = '';
    constructor(json?: any) {
        if (json) {
            this.title = json.title;
            this.date = json.date;
            this.explanation = json.explanation;
            this.url = json.url;
            this.hdurl = json.hdurl;
        }
        else {

        }
    }
}