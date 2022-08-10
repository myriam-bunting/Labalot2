import { AnimalsService } from './animals.service';
import { CreateAnimalDto } from './dto/create-animal.dto';
import { UpdateAnimalDto } from './dto/update-animal.dto';
export declare class AnimalsController {
    private readonly animalsService;
    constructor(animalsService: AnimalsService);
    create(createAnimalDto: CreateAnimalDto): import(".prisma/client").Prisma.Prisma__animalsClient<import(".prisma/client").animals>;
    findAll(): Promise<import(".prisma/client").animals[]>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__animalsClient<import(".prisma/client").animals>;
    update(id: string, updateAnimalDto: UpdateAnimalDto): import(".prisma/client").Prisma.Prisma__animalsClient<import(".prisma/client").animals>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__animalsClient<import(".prisma/client").animals>;
}
