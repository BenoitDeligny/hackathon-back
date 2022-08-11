import { Injectable } from "@nestjs/common";
import { Patient } from "../model/Patient";

@Injectable()
export class PatientService {

    public async findAllPatients(): Promise<Array<Patient>> {
        return [];
    }
}