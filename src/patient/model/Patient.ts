export class Patient {
    // Waiting for database definition
    // private id: number;
    private lastName: string;
    private firstName: string;
    private address: string;
    private email: string;
    // Waiting for appointment definition
    // private appointment: Appointment

    constructor($lastName: string, $firstName: string, $address: string, $email: string) {
        this.lastName = $lastName;
        this.firstName = $firstName;
        this.address = $address;
        this.email = $email;
    }

    // GETTERS

    public get $lastName(): string {
        return this.lastName;
    }

    public get $firstName(): string {
        return this.firstName;
    }

    public get $address(): string {
        return this.address;
    }

    public get $email(): string {
        return this.email;
    }

}