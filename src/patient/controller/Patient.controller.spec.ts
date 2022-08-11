import { Test, TestingModule } from '@nestjs/testing';
import { Observable } from 'rxjs';
import { Patient } from '../model/Patient';
import { PatientDto } from '../model/PatientDto';
import { PatientService } from '../service/Patient.service';
import { PatientController } from './Patient.controller';

// TODO: we should work on this
// for now, tests are too simple
// need trhowing error and httpCode Status
describe('PatientController', () => {
    let patientController: PatientController;

    const mockPatientService = {
        findAllPatients: jest.fn(() => {
            return [
                new Patient(1, 'lastname1', 'firstname1', 'address1', 'email1'),
                new Patient(2, 'lastname2', 'firstname2', 'address2', 'email2'),
                new Patient(3, 'lastname3', 'firstname3', 'address3', 'email3'),
                new Patient(4, 'lastname4', 'firstname4', 'address4', 'email4'),
            ];
        }),
        findPatientById: jest.fn(id => {
            return new Patient(id, 'lastname', 'firstname', 'address', 'email')
        }),
        savePatient: jest.fn(dto => {
            return new Patient(dto.id, dto.lastname, dto.firstname, dto.address, dto.email)
        }),
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
            const patientDto = new PatientDto(5, 'newLastname', 'newFirstname', 'newAddress', 'newEmail')

            // when
            patientController.savePatient(patientDto);

            // then
            expect(mockPatientService.savePatient).toHaveBeenCalledWith(patientDto);
            expect(mockPatientService.savePatient).toHaveBeenCalledTimes(1);
        });
    });
});