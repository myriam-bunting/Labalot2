import { Injectable } from '@nestjs/common';
import { CreateExperimentDto } from './dto/create-experiment.dto';
import { UpdateExperimentDto } from './dto/update-experiment.dto';
import { PrismaService } from 'src/prisma.service';
import { experiments, prisma } from '@prisma/client';

@Injectable()
export class ExperimentsService {
  constructor(private prisma: PrismaService) {}

  create(createExperimentDto: CreateExperimentDto) {
    return this.prisma.experiments.create({
      data: {
        protocol_id: createExperimentDto.protocol_id,
        start_date: createExperimentDto.start_date,
        end_date: createExperimentDto.end_date,
        description: createExperimentDto.description,
      },
    });
  }

  findAll() {
    return this.prisma.experiments.findMany();
  }

  findOne(id: number) {
    return this.prisma.experiments.findUnique({
      where: { id: id },
    });
  }

  update(id: number, updateExperimentDto: UpdateExperimentDto) {
    return this.prisma.experiments.update({
      where: { id: id },
      data: {
        protocol_id: updateExperimentDto.protocol_id,
        start_date: updateExperimentDto.start_date,
        end_date: updateExperimentDto.end_date,
        description: updateExperimentDto.description,
      },
    });
  }

  //create route to update many experiments

  // updateMany(id: number, updateExperimentDto: UpdateExperimentDto) {
  //   return this.prisma.experiments.updateMany({
  //     where: { id: id },
  //     data: {
  //       protocol_id: updateExperimentDto.protocol_id,
  //       start_date: updateExperimentDto.start_date,
  //       end_date: updateExperimentDto.end_date,
  //       description: updateExperimentDto.description,
  //     },
  //   });
  // }

  remove(id: number) {
    return this.prisma.experiments.delete({
      where: { id: id },
    });
  }
}
