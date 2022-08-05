import { Injectable } from "@nestjs/common";
import { Patient } from "src/patient/domain/model/Patient";
import { PatientRepository } from "src/patient/domain/ports/Patient.repository";

@Injectable()
export class PatientInMemory implements PatientRepository {

    private readonly patients: Patient[] = [
        new Patient(1, 'lastname1', 'firstname1', 'address1', 'email1'),
        new Patient(2, 'lastname2', 'firstname2', 'address2', 'email2'),
        new Patient(3, 'lastname3', 'firstname3', 'address3', 'email3'),
        new Patient(4, 'lastname4', 'firstname4', 'address4', 'email4'),
    ];

    findAllPatients(): Patient[] {
        return this.patients;
    }
    findPatientById(id: number): Patient {
        return this.patients
            .find((patient) => patient.$id === id) ?? null; // TODO: refacto ?
    }
    savePatient(patient: Patient): Patient {
        this.patients.push(patient);
        return patient;
    }

}