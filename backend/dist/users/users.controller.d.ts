import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(createUserDto: CreateUserDto): import(".prisma/client").Prisma.Prisma__usersClient<import(".prisma/client").users>;
    findAll(): Promise<import(".prisma/client").users[]>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__usersClient<import(".prisma/client").users>;
    update(id: string, updateUserDto: UpdateUserDto): import(".prisma/client").Prisma.Prisma__usersClient<import(".prisma/client").users>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__usersClient<import(".prisma/client").users>;
}
