import { Module } from '@nestjs/common';
import { ProtocolsService } from './protocols.service';
import { ProtocolsController } from './protocols.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [ProtocolsController],
  providers: [ProtocolsService, PrismaService],
})
export class ProtocolsModule {}
