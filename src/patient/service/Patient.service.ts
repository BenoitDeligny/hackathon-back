import { Injectable } from "@nestjs/common";
import { EMPTY, from, Observable, of } from "rxjs";
import { Patient } from "../model/Patient";
import { PatientDto } from "../model/PatientDto";

@Injectable()
export class PatientService {
    // Temporary data mock
    // Should not be public
    // Remove IDs or find a way to auto-generate id for this fake DB
    public patientsDatabase: Patient[] = [
        new Patient(1, 'lastname1', 'firstname1', 'address1', 'email1'),
        new Patient(2, 'lastname2', 'firstname2', 'address2', 'email2'),
        new Patient(3, 'lastname3', 'firstname3', 'address3', 'email3'),
        new Patient(4, 'lastname4', 'firstname4', 'address4', 'email4'),
    ];

    public findAllPatients(): Patient[] {
        return this.patientsDatabase; // call the repository instead
    }

    public findPatientById(id: number): Patient {
        const foundedPatient = this.patientsDatabase.find(patient => patient.$id === id);
        if (!foundedPatient) {
            return null; // Throw something instead
        }
        return foundedPatient; // call the repository instead
    }

    public savePatient(newPatient: PatientDto): Patient {
        const savedPatient = new Patient(
            newPatient.id,
            newPatient.lastname,
            newPatient.firstname,
            newPatient.address,
            newPatient.email
        );
        this.patientsDatabase = [...this.patientsDatabase, savedPatient];
        return savedPatient; // call the repository instead
    }

    public updatePatient(id: number, updatedPatientDto: PatientDto): Patient {
        // This will be used when we will have a real DB
        // Or will use the method findByIdAndUpdate()
        let patientToUpdate = this.findPatientById(id);
        patientToUpdate = new Patient(
            updatedPatientDto.id, // TODO: We will NOT update this field later
            updatedPatientDto.lastname,
            updatedPatientDto.firstname,
            updatedPatientDto.address,
            updatedPatientDto.email
        );

        // Temporary logic to moidify the fake DB
        // call the repository instead
        this.patientsDatabase[id - 1] = patientToUpdate;

        return patientToUpdate;
    }
}