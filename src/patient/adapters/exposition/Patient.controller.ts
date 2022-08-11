import { Body, Controller, Get, Param, ParseIntPipe, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { Patient } from "../../domain/model/Patient";
import { PatientDto } from "./dto/PatientDto";
import { PatientService } from "../../domain/usecases/Patient.service";
import { FindPatientByIdParams } from "./dto/FindPatientByIdParams";

@Controller({
    path: 'patients',
    version: ['1']
})
export class PatientController {

    constructor(private readonly patientService: PatientService) { }

    @Get('')
    findAllPatients(): Patient[] {
        return this.patientService.findAllPatients();
    }

    @Get(':id')
    findPatientById(@Param('id', ParseIntPipe) params: FindPatientByIdParams): Patient {
        return this.patientService.findPatientById(params.id);
    }

    @Post('')
    @UsePipes(new ValidationPipe({ transform: true }))
    async savePatient(@Body() patient: PatientDto): Promise<Patient> {
        // TODO: generate a random ID (UUID ?) ?
        return await this.patientService.savePatient(patient);
    }
}