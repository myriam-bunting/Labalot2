import { Module } from '@nestjs/common';
import { CagesService } from './cages.service';
import { CagesController } from './cages.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [CagesController],
  providers: [CagesService, PrismaService],
})
export class CagesModule {}
