import { CagesService } from './cages.service';
import { CreateCageDto } from './dto/create-cage.dto';
import { UpdateCageDto } from './dto/update-cage.dto';
export declare class CagesController {
    private readonly cagesService;
    constructor(cagesService: CagesService);
    create(createCageDto: CreateCageDto): import(".prisma/client").Prisma.Prisma__cagesClient<import(".prisma/client").cages>;
    findAll(): import(".prisma/client").PrismaPromise<import(".prisma/client").cages[]>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__cagesClient<import(".prisma/client").cages>;
    update(id: string, updateCageDto: UpdateCageDto): import(".prisma/client").Prisma.Prisma__cagesClient<import(".prisma/client").cages>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__cagesClient<import(".prisma/client").cages>;
}
