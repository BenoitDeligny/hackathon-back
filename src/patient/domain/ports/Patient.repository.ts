import { Patient } from "../model/Patient";

export interface PatientRepository {
    findAllPatients(): Patient[];
    findPatientById(id: number): Patient;
    savePatient(patient: Patient): Patient;
}

export const PatientRepository = Symbol('PatientRepository');