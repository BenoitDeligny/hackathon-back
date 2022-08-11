import { Body, Controller, Get, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
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
        // TODO: generate a random ID (UUID ?) ?
        return this.patientService.savePatient(patient);
    }

    @Put(':id')
    updatePatient(@Param('id') id: number, @Body() patient: PatientDto): Patient {
        return this.patientService.updatePatient(id, patient);
    }

    // should have update patient info
    // should have update / add patient appointment
}