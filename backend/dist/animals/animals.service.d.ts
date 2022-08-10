import { CreateAnimalDto } from './dto/create-animal.dto';
import { UpdateAnimalDto } from './dto/update-animal.dto';
import { PrismaService } from '../prisma.service';
import { animals, Prisma } from '@prisma/client';
export declare class AnimalsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createAnimalDto: CreateAnimalDto): Prisma.Prisma__animalsClient<animals>;
    findAll(): Promise<animals[]>;
    findOne(id: number): Prisma.Prisma__animalsClient<animals>;
    update(id: number, updateAnimalDto: UpdateAnimalDto): Prisma.Prisma__animalsClient<animals>;
    remove(id: number): Prisma.Prisma__animalsClient<animals>;
}
