export class Pokemon {
    name: string;
    url: string;
    power: string;

    constructor(name: string, power: string, url='') {
        this.name = name;
        this.url = url;
        this.power = power;
    }

}