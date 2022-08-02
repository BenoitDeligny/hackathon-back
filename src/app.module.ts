import { Module } from '@nestjs/common';
import { PatientController } from './patient/controller/PatientController';
import { PatientService } from './patient/service/PatientService';

@Module({
  imports: [],
  controllers: [PatientController],
  providers: [PatientService],
})
export class AppModule { }
