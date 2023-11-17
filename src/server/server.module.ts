import { Module } from '@nestjs/common';
import { ServerController } from './controller/server.controller';
import { ServerService } from './services/server.service';

@Module({
  controllers: [ServerController],
  providers: [ServerService],
})
export class ServerModule {}
