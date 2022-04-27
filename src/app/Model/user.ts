export class User {
    id: number;
    name: string;
    surname: string;
    cellPhone: string;

    constructor (id: number, name: string, surname: string, cellPhone: string){
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.cellPhone = cellPhone;
    }
}