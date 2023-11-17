import {
  IsString,
  IsNotEmpty,
} from 'class-validator/types/decorator/decorators';
import { ServerType } from '../../utils/enum/server-type';

export class CreateServerInput {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  ip: string;

  @IsString()
  @IsNotEmpty()
  ipSegment: string;

  @IsString()
  @IsNotEmpty()
  subnetMask: string;

  @IsString()
  @IsNotEmpty()
  prefix: string;

  @IsString()
  @IsNotEmpty()
  MAC: string;

  @IsString()
  @IsNotEmpty()
  city: string;

  @IsString()
  @IsNotEmpty()
  model: string;

  @IsString()
  @IsNotEmpty()
  os: string;

  @IsString()
  @IsNotEmpty()
  dist: string;

  @IsString()
  @IsNotEmpty()
  type: ServerType;
}
