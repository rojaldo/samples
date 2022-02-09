export class Hero {
    constructor(public name: string, public alias='') {
    }

    getName() {
        return this.name;
    }

    getAlias() {
        return this.alias;
    }

    setName(name: string) {
        this.name = name;
    }

    setAlias(alias: string) {
        this.alias = alias;
    }

    readonly toString = ()=>`${this.name} (${this.alias})`;

    emptyName() {
        return this.name.length === 0;
    }

}