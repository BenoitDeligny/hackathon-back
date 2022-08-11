import { Appointment } from "src/appointment/model/Appointment";

export class Patient {
    private id: number;    // Waiting for database definition UUID ?
    private lastname: string;
    private firstname: string;
    private address: string; //
    private email: string;
    private appointments: Appointment[];

    constructor($id: number, $lastName: string, $firstName: string, $address: string, $email: string, $appointments: Appointment[]) {
        this.id = $id;
        this.lastname = $lastName;
        this.firstname = $firstName;
        this.address = $address;
        this.email = $email;
        this.appointments = $appointments;
    }

    // GETTERS

    public get $id(): number {
        return this.id;
    }

    public get $lastname(): string {
        return this.lastname;
    }

    public get $firstname(): string {
        return this.firstname;
    }

    public get $address(): string {
        return this.address;
    }

    public get $email(): string {
        return this.email;
    }

    public get $appointments(): Appointment[] {
        return this.appointments;
    }

}