import { CreateProtocolDto } from './dto/create-protocol.dto';
import { UpdateProtocolDto } from './dto/update-protocol.dto';
import { protocols, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
export declare class ProtocolsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createProtocolDto: CreateProtocolDto): Prisma.Prisma__protocolsClient<protocols>;
    findAll(): import(".prisma/client").PrismaPromise<protocols[]>;
    findOne(id: number): Prisma.Prisma__protocolsClient<protocols>;
    update(id: number, updateProtocolDto: UpdateProtocolDto): Prisma.Prisma__protocolsClient<protocols>;
    remove(id: number): Prisma.Prisma__protocolsClient<protocols>;
}
