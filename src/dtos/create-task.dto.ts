import { IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { StatusEnum } from 'src/schemas/task.schema';

export class CreateTaskDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  description: string;

  //se define un valor como default
  @IsEnum(StatusEnum) // Ensure that the value is one of the enum values
  status: StatusEnum = StatusEnum.TODO; // Set the default status
}
