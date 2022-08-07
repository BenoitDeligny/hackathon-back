import { Module } from "@nestjs/common";
import { PatientController } from "./controller/Patient.controller";
import { PatientService } from "./service/Patient.service";

@Module({
    controllers: [PatientController],
    providers: [PatientService]
})
export class PatientModule { }