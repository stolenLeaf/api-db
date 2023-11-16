import { Injectable } from '@nestjs/common';

@Injectable()
export class ConnectionsService {

  findAll():string{
    return "hello world from service";
  }
}
