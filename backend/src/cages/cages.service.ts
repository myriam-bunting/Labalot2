import { Injectable } from '@nestjs/common';
import { CreateCageDto } from './dto/create-cage.dto';
import { UpdateCageDto } from './dto/update-cage.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class CagesService {
  constructor(private prisma: PrismaService) {}

  create(createCageDto: CreateCageDto) {
    return this.prisma.cages.create({
      data: {
        name: createCageDto.name,
        experiment_id: createCageDto.experiment_id,
        isBreeding: createCageDto.isBreeding,
      },
    });
  }

  findAll() {
    return this.prisma.cages.findMany({});
  }

  findOne(id: number) {
    return this.prisma.cages.findUnique({
      where: { id: id },
    });
  }

  update(id: number, updateCageDto: UpdateCageDto) {
    return this.prisma.cages.update({
      where: { id: id },
      data: {
        name: updateCageDto.name,
        experiment_id: updateCageDto.experiment_id,
        isBreeding: updateCageDto.isBreeding,
      },
    });
  }

  remove(id: number) {
    return this.prisma.cages.delete({
      where: { id: id },
    });
  }
}
