import { Module } from '@nestjs/common';
import { PatientController } from './patient/controller/Patient.controller';
import { PatientService } from './patient/service/Patient.service';

@Module({
  imports: [],
  controllers: [PatientController],
  providers: [PatientService],
})
export class AppModule { }
