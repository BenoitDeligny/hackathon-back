import { Controller, Get } from "@nestjs/common";
import { Appointment } from "../model/Appointment";
import { AppointmentService } from "../service/Appointment.service";

@Controller('api/v1/appointments')
export class AppointmentController {

    constructor(private readonly appointmentService: AppointmentService) { }

    @Get('')
    findAllAppointments(): Appointment[] {
        return this.appointmentService.findAllAppointments();
    }
    // Get all
    // Get all (tri par date)
    // Get all (tri par client)

    // Get by id (systeme d'id du praticien)

    // Create

    // Update 

    // Delete
}