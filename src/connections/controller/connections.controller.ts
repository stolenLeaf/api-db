import { Controller, Get } from '@nestjs/common';
import { ConnectionsService } from '../service/connections.service';

@Controller('connections')
export class ConnectionsController {
  constructor(private connenService: ConnectionsService) {}

  @Get()
  findAll(): string {
    return this.connenService.findAll();
  }
}
