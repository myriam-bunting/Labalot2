import { CreateCageDto } from './dto/create-cage.dto';
import { UpdateCageDto } from './dto/update-cage.dto';
import { PrismaService } from 'src/prisma.service';
import { cages, Prisma } from '@prisma/client';
export declare class CagesService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createCageDto: CreateCageDto): Prisma.Prisma__cagesClient<cages>;
    findAll(): import(".prisma/client").PrismaPromise<cages[]>;
    findOne(id: number): Prisma.Prisma__cagesClient<cages>;
    update(id: number, updateCageDto: UpdateCageDto): Prisma.Prisma__cagesClient<cages>;
    remove(id: number): Prisma.Prisma__cagesClient<cages>;
}
