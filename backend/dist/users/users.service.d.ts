import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from '../prisma.service';
import { users, Prisma } from '@prisma/client';
export declare class UsersService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createUserDto: CreateUserDto): Prisma.Prisma__usersClient<users>;
    findAll(): Promise<users[]>;
    findOne(id: number): Prisma.Prisma__usersClient<users>;
    update(id: number, updateUserDto: UpdateUserDto): Prisma.Prisma__usersClient<users>;
    remove(id: number): Prisma.Prisma__usersClient<users>;
}
