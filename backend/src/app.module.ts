import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AnimalsModule } from './animals/animals.module';
import { ProtocolsModule } from './protocols/protocols.module';
import { CagesModule } from './cages/cages.module';
import { ExperimentsModule } from './experiments/experiments.module';

@Module({
  imports: [UsersModule, AnimalsModule, ProtocolsModule, CagesModule, ExperimentsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
