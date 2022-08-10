import { ExperimentsService } from './experiments.service';
import { CreateExperimentDto } from './dto/create-experiment.dto';
import { UpdateExperimentDto } from './dto/update-experiment.dto';
export declare class ExperimentsController {
    private readonly experimentsService;
    constructor(experimentsService: ExperimentsService);
    create(createExperimentDto: CreateExperimentDto): import(".prisma/client").Prisma.Prisma__experimentsClient<import(".prisma/client").experiments>;
    findAll(): import(".prisma/client").PrismaPromise<import(".prisma/client").experiments[]>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__experimentsClient<import(".prisma/client").experiments>;
    update(id: string, updateExperimentDto: UpdateExperimentDto): import(".prisma/client").Prisma.Prisma__experimentsClient<import(".prisma/client").experiments>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__experimentsClient<import(".prisma/client").experiments>;
}
