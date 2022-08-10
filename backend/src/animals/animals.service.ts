import { Injectable } from '@nestjs/common';
import { CreateAnimalDto } from './dto/create-animal.dto';
import { UpdateAnimalDto } from './dto/update-animal.dto';
import { PrismaService } from '../prisma.service';
import { animals, Prisma } from '@prisma/client';

@Injectable()
export class AnimalsService {
  constructor(private prisma: PrismaService) {}

  create(createAnimalDto: CreateAnimalDto) {
    return this.prisma.animals.create({
      data: {
        tag: createAnimalDto.tag,
        genotype: createAnimalDto.genotype,
        gender: createAnimalDto.gender,
        birth_date: createAnimalDto.birth_date,
        phenotype: createAnimalDto.phenotype,
        experiment_id: createAnimalDto.experiment_id,
        culled_date: createAnimalDto.culled_date,
      },
    });
  }

  async findAll() {
    return this.prisma.animals.findMany({});
  }

  findOne(id: number) {
    return this.prisma.animals.findUnique({
      where: {
        id: id,
      },
    });
  }

  update(id: number, updateAnimalDto: UpdateAnimalDto) {
    return this.prisma.animals.update({
      where: { id: id },
      data: {
        tag: updateAnimalDto.tag,
        genotype: updateAnimalDto.genotype,
        gender: updateAnimalDto.gender,
        birth_date: updateAnimalDto.birth_date,
        phenotype: updateAnimalDto.phenotype,
        experiment_id: updateAnimalDto.experiment_id,
        culled_date: updateAnimalDto.culled_date,
      },
    });
  }
  //works but fix date format in postman

  remove(id: number) {
    return this.prisma.animals.delete({
      where: {
        id: id,
      },
    });
  }
}
