import { CreateCageDto } from './dto/create-cage.dto';
import { UpdateCageDto } from './dto/update-cage.dto';
import { PrismaService } from 'src/prisma.service';
export declare class CagesService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createCageDto: CreateCageDto): import(".prisma/client").Prisma.Prisma__cagesClient<import(".prisma/client").cages>;
    findAll(): import(".prisma/client").PrismaPromise<import(".prisma/client").cages[]>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__cagesClient<import(".prisma/client").cages>;
    update(id: number, updateCageDto: UpdateCageDto): import(".prisma/client").Prisma.Prisma__cagesClient<import(".prisma/client").cages>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__cagesClient<import(".prisma/client").cages>;
}
