import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import config from './config'
import { enviroments } from './config/enviroments'
import { ConnectionsController } from './connections/controller/connections.controller';
import { ConnectionsService } from './connections/service/connections.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: enviroments[process.env.NODE_ENV] || '.env',
      load: [config],
      isGlobal: true
    })
  ],
  controllers: [AppController, ConnectionsController],
  providers: [AppService, ConnectionsService],
})
export class AppModule { }
