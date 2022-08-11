export class Appointment {

    scheduledDate: Date;
    appointmentPurpose: string[]; // TODO: change it to an object Purpose (cf: soin -> trouver mieux)
    // invoice: Invoice; // TODO: waiting for havnig the object

    constructor($scheduledDate: Date, $appointmentPurpose: string[]) {
        this.scheduledDate = $scheduledDate;
        this.appointmentPurpose = $appointmentPurpose;
    }

    // GETTERS

    public get $scheduledDate() {
        return this.scheduledDate;
    }

    public get $appointmentPurpose() {
        return this.appointmentPurpose;
    }
}