import { Test, TestingModule } from '@nestjs/testing';
import { PatientService } from './Patient.service';
import { PatientDto } from '../model/PatientDto';
import { Appointment } from '../../appointment/model/Appointment';


describe('PatientService', () => {
    let patientService: PatientService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [PatientService],
        }).compile();

        patientService = module.get<PatientService>(PatientService);
    });

    describe('root', () => {
        it('should be defined', () => {
            expect(patientService).toBeDefined();
        });
    });

    describe('findAllPatients', () => {
        it('GET on /patients should return all patients', () => {
            // given

            // when
            const patientList = patientService.findAllPatients();

            // then
            expect(patientList.length).toBe(3);
        });
    });

    describe('findPatientById', () => {
        it('GET on /patients/id should return empty if ID not found', () => {
            // given
            const patientId = 5;

            // when

            // then
            expect(() => patientService.findPatientById(patientId)).toThrow('The patient with id: 5 was not found.');
        });


        it('GET on /patients/id should return the good patient', () => {
            // given
            const patientId = 1;

            // when
            const foundedPatient = patientService.findPatientById(patientId);

            // then
            expect(foundedPatient.$id).toBe(1);
            expect(foundedPatient.$lastname).toBe('lastname1');
            expect(foundedPatient.$firstname).toBe('firstname1');
            expect(foundedPatient.$address).toBe('address1');
            expect(foundedPatient.$email).toBe('email1');
        });
    });

    describe('savePatient', () => {
        it('POST on /patients should save new patient', () => {
            // given
            const newPatient = new PatientDto(4, 'lastname4', 'firstname4', 'address4', 'email4', [{ 'date': '2022-08-30', 'purpose': ['Semelles'] }]);

            // when
            const savedPatient = patientService.savePatient(newPatient);

            // then
            expect(patientService.patientsDatabase.length).toBe(4);
            expect(savedPatient.$id).toBe(4);
            expect(savedPatient.$lastname).toBe('lastname4');
            expect(savedPatient.$firstname).toBe('firstname4');
            expect(savedPatient.$address).toBe('address4');
            expect(savedPatient.$email).toBe('email4');
            expect(savedPatient.$appointments).toEqual([new Appointment(new Date('2022-08-30'), ['Semelles'])]);
        });
    });

    describe('updatePatient', () => {
        it('PUT on /patients/id should update an existing patient', () => {
            // given.
            const patientId = 2;
            const updatedPatientDto = new PatientDto(2, 'newLastname2', 'newFirstname2', 'newAddress2', 'email2', [{ 'date': '2022-08-30', 'purpose': ['Semelles'] }])

            // when
            patientService.updatePatient(patientId, updatedPatientDto);

            // // then
            expect(patientService.patientsDatabase[patientId - 1].$id).toEqual(2);
            expect(patientService.patientsDatabase[patientId - 1].$lastname).toEqual('newLastname2');
            expect(patientService.patientsDatabase[patientId - 1].$firstname).toEqual('newFirstname2');
            expect(patientService.patientsDatabase[patientId - 1].$address).toEqual('newAddress2');
            expect(patientService.patientsDatabase[patientId - 1].$email).toEqual('email2');
            expect(patientService.patientsDatabase[patientId - 1].$appointments).toEqual([new Appointment(new Date('2022-08-30'), ['Semelles'])]);
        });
    });
});


