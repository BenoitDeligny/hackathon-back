import { Injectable, NotFoundException } from "@nestjs/common";
import { Appointment } from "../../appointment/model/Appointment";
import { Patient } from "../model/Patient";
import { PatientDto } from "../model/PatientDto";

@Injectable()
export class PatientService {
    // Temporary data mock
    // Should not be public
    // Remove IDs or find a way to auto-generate id for this fake DB
    public patientsDatabase: Patient[] = [
        new Patient(1, 'lastname1', 'firstname1', 'address1', 'email1', [
            new Appointment(new Date('2022-04-25'), ['Pédicure', 'Semelles']),
            new Appointment(new Date('2022-07-28'), ['Réglage semelles']),
        ]),
        new Patient(2, 'lastname2', 'firstname2', 'address2', 'email2', [
            new Appointment(new Date('2022-06-11'), ['Soin ongles']),
            new Appointment(new Date('2022-09-02'), ['Semelles']),
        ]),
        new Patient(3, 'lastname3', 'firstname3', 'address3', 'email3', [
            new Appointment(new Date('2022-03-22'), ['Pédicure']),
            new Appointment(new Date('2022-08-01'), ['Soin genou']),
        ]),
    ];

    public findAllPatients(): Patient[] {
        return this.patientsDatabase; // call the repository instead
    }

    public findPatientById(id: number): Patient {
        const foundedPatient = this.patientsDatabase.find((patient) => patient.$id === id) ?? null;
        if (foundedPatient === null) {
            throw new NotFoundException(`The patient with id: ${id} was not found.`);
        }
        return foundedPatient; // call the repository instead
    }

    public savePatient(newPatient: PatientDto): Patient {
        const savedPatient = this.mapToPatient(newPatient);

        this.patientsDatabase = [...this.patientsDatabase, savedPatient];

        return savedPatient; // call the repository instead
    }


    // What to update ?
    public updatePatient(id: number, updatedPatientDto: PatientDto): Patient {
        // This will be used when we will have a real DB
        // Or will use the method findByIdAndUpdate()
        let patientToUpdate = this.findPatientById(id);
        patientToUpdate = this.mapToPatient(updatedPatientDto);

        // Temporary logic to moidify the fake DB
        // call the repository instead
        this.patientsDatabase[id - 1] = patientToUpdate;

        return patientToUpdate;
    }

    private mapToPatient(dto: PatientDto): Patient {
        return new Patient(
            dto.id,
            dto.lastname,
            dto.firstname,
            dto.address,
            dto.email,
            this.mapToAppointment(dto)
        );
    }

    private mapToAppointment(dto: PatientDto): Appointment[] {
        let patientAppointments: Appointment[] = [];
        for (const appointment of dto.appointments) {

            patientAppointments.push(new Appointment(
                new Date(appointment.date),
                appointment.purpose)
            );
        }

        return patientAppointments;
    }
}