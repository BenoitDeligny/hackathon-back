import { Test, TestingModule } from '@nestjs/testing';
import { PatientService } from './Patient.service';
import { Patient } from '../model/Patient';
import { PatientInMemory } from 'src/patient/adapters/infra/PatientInMemory.repository';
import { PatientRepository } from 'src/patient/domain/ports/Patient.repository';

describe('PatientService', () => {
    let service: PatientService;
    let inMemoryDatabase: PatientRepository;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                PatientService,
                {
                    provide: PatientRepository,
                    useClass: PatientInMemory
                }
            ],
        }).compile();

        service = module.get<PatientService>(PatientService);
        inMemoryDatabase = module.get<PatientRepository>(PatientRepository);
    });

    describe('root', () => {
        it('should be defined', () => {
            expect(service).toBeDefined();
        });
    });

    describe('findAllPatients', () => {
        it('GET on /patients should return all patients', () => {
            // given
            const actualPatientList = [
                new Patient(1, 'lastname1', 'firstname1', 'address1', 'email1'),
                new Patient(2, 'lastname2', 'firstname2', 'address2', 'email2'),
                new Patient(3, 'lastname3', 'firstname3', 'address3', 'email3'),
                new Patient(4, 'lastname4', 'firstname4', 'address4', 'email4'),
            ];

            // when
            const patientList = inMemoryDatabase.findAllPatients();

            // then
            expect(patientList.length).toBe(4);
            expect(patientList).toEqual(actualPatientList);
        });
    });

    describe('findPatientById', () => {
        it('GET on /patients/id should return empty if ID not found', () => {
            // given
            const patientId = 5;

            // when
            const foundedPatient = inMemoryDatabase.findPatientById(patientId);

            // then
            expect(foundedPatient).toBe(null);
        });


        it('GET on /patients/id should return the good patient', () => {
            // given
            const patientId = 1;

            // when
            const foundedPatient = inMemoryDatabase.findPatientById(patientId);

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
            const newPatient = new Patient(5, 'lastname5', 'firstname5', 'address5', 'email5');

            // when
            const savedPatient = inMemoryDatabase.savePatient(newPatient);

            // then
            expect(inMemoryDatabase.findAllPatients().length).toBe(5);
            expect(savedPatient.$id).toBe(5);
            expect(savedPatient.$lastname).toBe('lastname5');
            expect(savedPatient.$firstname).toBe('firstname5');
            expect(savedPatient.$address).toBe('address5');
            expect(savedPatient.$email).toBe('email5');
        });
    });
});


