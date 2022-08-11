import { Test, TestingModule } from '@nestjs/testing';
import { Appointment } from '../model/Appointment';
import { AppointmentService } from '../service/Appointment.service';
import { AppointmentController } from './Appointment.controller';

// need throwing error and httpCode Status
describe('PatientController', () => {
    let appointmentController: AppointmentController;

    const mockAppointmentService = {
        findAllAppointments: jest.fn(() => {
        }),
        // findPatientById: jest.fn(id => {
        // }),
        // savePatient: jest.fn(dto => {
        // }),
        // updatePatient: jest.fn((id, dto) => {
        // })
    };

    beforeEach(async () => {

        const module: TestingModule = await Test.createTestingModule({
            providers: [AppointmentService],
            controllers: [AppointmentController],
        })
            .overrideProvider(AppointmentService)
            .useValue(mockAppointmentService)
            .compile();

        appointmentController = module.get<AppointmentController>(AppointmentController);
    });

    describe('root', () => {
        it('Should be defined', () => {
            expect(appointmentController).toBeDefined();
        });
    });

    describe('findAllApppointments', () => {
        it('GET on /appointments should call the appointmentService', () => {
            // when
            appointmentController.findAllAppointments();

            // then
            expect(mockAppointmentService.findAllAppointments).toHaveBeenCalledTimes(1);
        });
    });
});