import { Injectable } from '@nestjs/common';
import { CreateProtocolDto } from './dto/create-protocol.dto';
import { UpdateProtocolDto } from './dto/update-protocol.dto';
import { protocols, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ProtocolsService {
  constructor(private prisma: PrismaService) {}

  create(createProtocolDto: CreateProtocolDto) {
    return this.prisma.protocols.create({
      data: {
        name: createProtocolDto.name,
        user_id: createProtocolDto.user_id,
        experiment_id: createProtocolDto.experiment_id,
      },
    });
  }

  findAll() {
    return this.prisma.protocols.findMany({});
  }

  findOne(id: number) {
    return this.prisma.protocols.findUnique({
      where: {
        id: id,
      },
    });
  }

  update(id: number, updateProtocolDto: UpdateProtocolDto) {
    return this.prisma.protocols.update({
      where: { id: id },
      data: {
        name: updateProtocolDto.name,
        user_id: updateProtocolDto.user_id,
        experiment_id: updateProtocolDto.experiment_id,
        lab_id: updateProtocolDto.lab_id,
      },
    });
  }

  remove(id: number) {
    return this.prisma.protocols.delete({
      where: { id: id },
    });
  }
}
