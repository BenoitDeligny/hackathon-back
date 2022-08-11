import { Test, TestingModule } from '@nestjs/testing';
import { Patient } from '../model/Patient';
import { PatientService } from '../service/PatientService';
import { PatientController } from './PatientController';

// This is NOT a Unit Test ==> more an Integration Test
describe('PatientController', () => {
    let patientController: PatientController;
    let mockedPatientService: PatientService;
    let stubPatientDatabase: Array<Patient>;

    beforeEach(async () => {
        // We mock the patientService response (cause for now the patient service is not done)
        const MockedService = {
            provide: PatientService,
            useFactory: () => ({
                findAllPatients: jest.fn(() => [
                    new Patient(
                        'PatientLastName1',
                        'PatientFirstName1',
                        'PatientAddress1',
                        'PatientEmail1'
                    ),
                    new Patient(
                        'PatientLastName2',
                        'PatientFirstName2',
                        'PatientAddress2',
                        'PatientEmail2'
                    ),
                ]),
            }),
        };

        // We initialize an Application Context
        const app: TestingModule = await Test.createTestingModule({
            controllers: [PatientController],
            providers: [PatientService, MockedService],
        }).compile();

        patientController = app.get<PatientController>(PatientController);
        mockedPatientService = app.get<PatientService>(PatientService);

        // Here we simulate the data in our Database - not very usefull here
        stubPatientDatabase = [
            new Patient(
                'PatientLastName1',
                'PatientFirstName1',
                'PatientAddress1',
                'PatientEmail1'
            ),
            new Patient(
                'PatientLastName2',
                'PatientFirstName2',
                'PatientAddress2',
                'PatientEmail2'
            ),
        ];
    });

    describe('GET findAllPatients', () => {
        it(`Should call the patientService's findAllPatients method`, () => {
            // given

            // when
            const spy = jest.spyOn(mockedPatientService, 'findAllPatients');
            const patientList = mockedPatientService.findAllPatients();
            // then
            expect(spy).toHaveBeenCalled();
            expect(patientList).toEqual(stubPatientDatabase); // not very usefull
        });
    });
});