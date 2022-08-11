export class PatientDto {
    public id: number;
    public lastname: string;
    public firstname: string;
    public address: string;
    public email: string;

    // TODO: add validator for non-nullable field
    constructor(id: number, lastname: string, firstname: string, address: string, email: string) {
        this.id = id;
        this.lastname = lastname;
        this.firstname = firstname;
        this.address = address;
        this.email = email // could be null
    }
}