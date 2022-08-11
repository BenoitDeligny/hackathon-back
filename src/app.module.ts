import { Module } from '@nestjs/common';
import { PatientModule } from './patient/patient.module';
import { AppointmentModule } from './appointment/appointment.module';

@Module({
  imports: [PatientModule, AppointmentModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
