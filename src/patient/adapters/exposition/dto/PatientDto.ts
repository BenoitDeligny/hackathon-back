import { Allow, IsEmail, IsNotEmpty, IsOptional } from "class-validator";

export class PatientDto {
    public id: number; // It will disappear when DB will be set up

    @IsNotEmpty()
    public lastname: string;

    @IsNotEmpty()
    public firstname: string;

    @IsNotEmpty()
    public address: string;

    @IsOptional()
    @IsEmail()
    public email: string;

    constructor(id: number, lastname: string, firstname: string, address: string, email: string) {
        this.id = id; // will be generate by the default DB system
        this.lastname = lastname;
        this.firstname = firstname;
        this.address = address;
        this.email = email // could be null
    }
}