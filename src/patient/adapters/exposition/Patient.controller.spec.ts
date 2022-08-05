import { Test, TestingModule } from '@nestjs/testing';
import { Patient } from '../../domain/model/Patient';
import { PatientDto } from './dto/PatientDto';
import { PatientService } from '../../domain/usecases/Patient.service';
import { PatientController } from './Patient.controller';
import { FindPatientByIdParams } from 'src/patient/adapters/exposition/dto/FindPatientByIdParams';

// TODO: we should work on this
// need throwing error and httpCode Status
describe('PatientController', () => {
    let patientController: PatientController;
    let patientService: PatientService;

    const mockPatientService = {
        findAllPatients: jest.fn(() => {
            return [];
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
        patientService = module.get<PatientService>(PatientService)
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
            const currentId = new FindPatientByIdParams();
            currentId.id = 2;

            // when
            patientController.findPatientById(currentId);

            // then
            expect(mockPatientService.findPatientById).toHaveBeenCalledWith(2);
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