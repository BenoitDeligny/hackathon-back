import { Controller, Get } from "@nestjs/common";
import { Patient } from "../model/Patient";
import { PatientService } from "../service/PatientService";

@Controller('api/v1/patients')
export class PatientController {

    constructor(private readonly patientService: PatientService) { }

    @Get('/')
    public async findAllPatients(): Promise<Array<Patient>> {
        return await this.patientService.findAllPatients();
    }
}