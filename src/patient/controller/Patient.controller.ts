import { Body, Controller, Get, Param, ParseIntPipe, Post } from "@nestjs/common";
import { Observable, take, toArray } from "rxjs";
import { Patient } from "../model/Patient";
import { PatientDto } from "../model/PatientDto";
import { PatientService } from "../service/Patient.service";

@Controller('api/v1/patients')
export class PatientController {

    constructor(private readonly patientService: PatientService) { }

    @Get('')
    findAllPatients(): Patient[] {
        return this.patientService.findAllPatients();
    }

    @Get(':id')
    findPatientById(@Param('id', ParseIntPipe) id: number): Patient {
        return this.patientService.findPatientById(id);
    }

    @Post('')
    savePatient(@Body() patient: PatientDto): Patient {
        // TODO: check each non-nullable field
        // TODO: generate a random ID (UUID ?) ?
        return this.patientService.savePatient(patient);
    }
}