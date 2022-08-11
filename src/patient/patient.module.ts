import { Module } from "@nestjs/common";
import { AppointmentModule } from "src/appointment/appointment.module";
import { PatientController } from "./controller/Patient.controller";
import { PatientService } from "./service/Patient.service";

@Module({
    imports: [AppointmentModule],
    controllers: [PatientController],
    providers: [PatientService]
})
export class PatientModule { }