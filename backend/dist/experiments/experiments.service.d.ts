import { CreateExperimentDto } from './dto/create-experiment.dto';
import { UpdateExperimentDto } from './dto/update-experiment.dto';
import { PrismaService } from 'src/prisma.service';
import { experiments } from '@prisma/client';
export declare class ExperimentsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createExperimentDto: CreateExperimentDto): import(".prisma/client").Prisma.Prisma__experimentsClient<experiments>;
    findAll(): import(".prisma/client").PrismaPromise<experiments[]>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__experimentsClient<experiments>;
    update(id: number, updateExperimentDto: UpdateExperimentDto): import(".prisma/client").Prisma.Prisma__experimentsClient<experiments>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__experimentsClient<experiments>;
}
