import { Injectable } from "@nestjs/common";
import { Appointment } from "../model/Appointment";

@Injectable()
export class AppointmentService {
    // TODO: Temporary mock

    public findAllAppointments(): Appointment[] {
        return [];
    }
}