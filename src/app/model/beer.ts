export class Beer {
    id = 0;
    name = '';
    tagline = '';
    firstBrewed = '';
    description = '';
    abv = 0;
    imageUrl = '';
    constructor(json: any) {
        this.id = json.id;
        this.name = json.name;
        this.tagline = json.tagline;
        this.firstBrewed = json.first_brewed;
        this.description = json.description;
        this.abv = json.abv;
        this.imageUrl = json.image_url;
    }
}