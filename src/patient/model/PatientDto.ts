import { IsObject, IsOptional, IsString } from "class-validator";

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

    @IsOptional()
    @IsObject()
    public appointments: AppointmentDto[];

    constructor(id: number, lastname: string, firstname: string, address: string, email: string, appointments: AppointmentDto[]) {
        this.id = id;
        this.lastname = lastname;
        this.firstname = firstname;
        this.address = address;
        this.email = email;
        this.appointments = appointments;
    }
}
class AppointmentDto {
    @IsString()
    public date: string;

    @IsString()
    public purpose: string[];
}