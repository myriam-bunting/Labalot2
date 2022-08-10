import { ProtocolsService } from './protocols.service';
import { CreateProtocolDto } from './dto/create-protocol.dto';
import { UpdateProtocolDto } from './dto/update-protocol.dto';
export declare class ProtocolsController {
    private readonly protocolsService;
    constructor(protocolsService: ProtocolsService);
    create(createProtocolDto: CreateProtocolDto): import(".prisma/client").Prisma.Prisma__protocolsClient<import(".prisma/client").protocols>;
    findAll(): import(".prisma/client").PrismaPromise<import(".prisma/client").protocols[]>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__protocolsClient<import(".prisma/client").protocols>;
    update(id: string, updateProtocolDto: UpdateProtocolDto): import(".prisma/client").Prisma.Prisma__protocolsClient<import(".prisma/client").protocols>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__protocolsClient<import(".prisma/client").protocols>;
}
