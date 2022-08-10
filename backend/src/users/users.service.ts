import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from '../prisma.service';
import { users, Prisma } from '@prisma/client';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  create(createUserDto: CreateUserDto) {
    return this.prisma.users.create({
      data: {
        name: createUserDto.name,
        email: createUserDto.email,
        field: createUserDto.field,
        postcode: createUserDto.postcode,
        role: createUserDto.role,
        lab_id: 1,
      },
    });
  }

  async findAll() {
    return this.prisma.users.findMany({});
  }

  findOne(id: number) {
    return this.prisma.users.findUnique({
      where: {
        id: id,
      },
    });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.prisma.users.update({
      where: {
        id: id,
      },
      data: {
        name: updateUserDto.name,
        email: updateUserDto.email,
        field: updateUserDto.field,
        postcode: updateUserDto.postcode,
        role: updateUserDto.role,
      },
    });
  }

  remove(id: number) {
    return this.prisma.users.delete({
      where: {
        id: id,
      },
    });
  }
}
