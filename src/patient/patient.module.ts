import { Module } from '@nestjs/common';
import { PatientController } from './adapters/exposition/Patient.controller';
import { PatientInMemory } from './adapters/infra/PatientInMemory.repository';
import { PatientRepository } from './domain/ports/Patient.repository';
import { PatientService } from './domain/usecases/Patient.service';

@Module({
    controllers: [PatientController],
    providers: [
        PatientService,
        {
            provide: PatientRepository,
            useClass: PatientInMemory
        }
    ]
})
export class PatientModule { }
