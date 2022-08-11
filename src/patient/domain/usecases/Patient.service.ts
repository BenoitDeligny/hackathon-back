import { Inject, Injectable, NotFoundException } from "@nestjs/common";
import { Patient } from "../model/Patient";
import { PatientDto } from "../../adapters/exposition/dto/PatientDto";
import { PatientRepository } from "../ports/Patient.repository";

@Injectable()
export class PatientService {

    constructor(
        @Inject(PatientRepository)
        private readonly patientInMemory: PatientRepository) { }

    public findAllPatients(): Patient[] {
        return this.patientInMemory.findAllPatients();
    }

    public findPatientById(id: number): Patient {
        const foundedPatient = this.patientInMemory.findPatientById(id);
        if (foundedPatient === null) {
            throw new NotFoundException(`The patient with id: ${id} was not found.`);
        }
        return foundedPatient;
    }

    public async savePatient(newPatient: PatientDto): Promise<Patient> {
        const newSavedPatient = new Patient(
            newPatient.id,
            newPatient.lastname,
            newPatient.firstname,
            newPatient.address,
            newPatient.email
        );

        this.patientInMemory.savePatient(newSavedPatient);
        return newSavedPatient;
    }
}
