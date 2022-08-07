import { IsNumber } from 'class-validator';

export class FindPatientByIdParams {
    @IsNumber()
    id: number;
}
