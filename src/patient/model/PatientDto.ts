import { IsOptional, IsString } from "class-validator";

export class PatientDto {
    public id: number; // TODO: remove it when real DB will be set up

    @IsString()
    public lastname: string;

    @IsString()
    public firstname: string;

    @IsString()
    public address: string;

    @IsOptional()
    @IsString()
    public email: string;

    constructor(id: number, lastname: string, firstname: string, address: string, email: string) {
        this.id = id;
        this.lastname = lastname;
        this.firstname = firstname;
        this.address = address;
        this.email = email
    }
}