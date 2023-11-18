import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import config from './config';
import { enviroments } from './config/enviroments';
import { ConnectionsController } from './connections/controller/connections.controller';
import { ConnectionsService } from './connections/service/connections.service';
import { ConfigModule } from '@nestjs/config';
import { ConnectionsModule } from './connections/connections.module';
import { ServerModule } from './server/server.module';
import { ServerTenantsController } from './server/controller/server-tenants.controller';
import { ServerTenantsService } from './server/services/server-tenants.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: enviroments[process.env.NODE_ENV] || '.env',
      load: [config],
      isGlobal: true,
    }),
    ConnectionsModule,
    ServerModule,
  ],
  controllers: [AppController, ConnectionsController, ServerTenantsController],
  providers: [AppService, ConnectionsService, ServerTenantsService],
})
export class AppModule {}
