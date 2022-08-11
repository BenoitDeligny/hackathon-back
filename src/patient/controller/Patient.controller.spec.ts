import { Test, TestingModule } from '@nestjs/testing';
import { Observable } from 'rxjs';
import { Patient } from '../model/Patient';
import { PatientDto } from '../model/PatientDto';
import { PatientService } from '../service/Patient.service';
import { PatientController } from './Patient.controller';

// need trhowing errors and httpCode Status
describe('PatientController', () => {
    let patientController: PatientController;

    const mockPatientService = {
        findAllPatients: jest.fn(() => {
        }),
        findPatientById: jest.fn(id => {
        }),
        savePatient: jest.fn(dto => {
        }),
        updatePatient: jest.fn((id, dto) => {
        })
    };

    beforeEach(async () => {

        const module: TestingModule = await Test.createTestingModule({
            providers: [PatientService],
            controllers: [PatientController],
        })
            .overrideProvider(PatientService)
            .useValue(mockPatientService)
            .compile();

        patientController = module.get<PatientController>(PatientController);
    });

    describe('root', () => {
        it('Should be defined', () => {
            expect(patientController).toBeDefined();
        });
    });

    describe('findAllPatients', () => {
        it(`GET on /patients should call the patientService`, () => {
            // given

            // when
            patientController.findAllPatients();

            // then
            expect(mockPatientService.findAllPatients).toHaveBeenCalledTimes(1);
        });
    });

    describe('findPatientById', () => {
        it(`GET on /patients/id should call the patientService`, () => {
            // given
            const currentId = 2;

            // when
            patientController.findPatientById(currentId);

            // then
            expect(mockPatientService.findPatientById).toHaveBeenCalledWith(currentId);
            expect(mockPatientService.findPatientById).toHaveBeenCalledTimes(1);
        });
    });

    describe('savePatient', () => {
        it(`POST on /patients should call the patientService`, () => {
            // given
            const patientDto = new PatientDto(5, 'newLastname', 'newFirstname', 'newAddress', 'newEmail', [])

            // when
            patientController.savePatient(patientDto);

            // then
            expect(mockPatientService.savePatient).toHaveBeenCalledWith(patientDto);
            expect(mockPatientService.savePatient).toHaveBeenCalledTimes(1);
        });
    });

    describe('updatePatient', () => {
        it(`PUT on /patients/id should call the patientService`, () => {
            // given
            const patientId = 3;
            const updatedPatient = new PatientDto(3, 'newLastname', 'newFirstname', 'newAddress', 'newEmail', [])

            // when
            patientController.updatePatient(patientId, updatedPatient);

            // then
            expect(mockPatientService.updatePatient).toHaveBeenCalledWith(3, updatedPatient);
            expect(mockPatientService.updatePatient).toHaveBeenCalledTimes(1);
        });
    });
});