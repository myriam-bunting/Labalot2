import { Module } from '@nestjs/common';
import { ExperimentsService } from './experiments.service';
import { ExperimentsController } from './experiments.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [ExperimentsController],
  providers: [ExperimentsService, PrismaService]
})
export class ExperimentsModule {}
