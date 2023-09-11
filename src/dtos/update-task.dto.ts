import { IsEnum, IsString } from 'class-validator';
import { StatusEnum } from 'src/schemas/task.schema';

export class UpdateTaskDto {
  @IsString()
  description: string;

  //se define un valor como default
  @IsEnum(StatusEnum) // Ensure that the value is one of the enum values
  status: StatusEnum;
}
