import { IsOptional, IsString, IsUUID, MinLength } from 'class-validator';

export class UpdateCarDto {
  @IsUUID('4')
  @IsOptional()
  readonly id?: string;
  @IsString()
  @IsOptional()
  readonly make?: string;
  @IsString()
  @MinLength(3)
  @IsOptional()
  readonly model?: string;
}
