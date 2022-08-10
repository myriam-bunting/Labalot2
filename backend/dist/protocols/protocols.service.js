"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProtocolsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
let ProtocolsService = class ProtocolsService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    create(createProtocolDto) {
        return this.prisma.protocols.create({
            data: {
                name: createProtocolDto.name,
                user_id: createProtocolDto.user_id,
                experiment_id: createProtocolDto.experiment_id,
            },
        });
    }
    findAll() {
        return this.prisma.protocols.findMany({});
    }
    findOne(id) {
        return this.prisma.protocols.findUnique({
            where: {
                id: id,
            },
        });
    }
    update(id, updateProtocolDto) {
        return this.prisma.protocols.update({
            where: { id: id },
            data: {
                name: updateProtocolDto.name,
                user_id: updateProtocolDto.user_id,
                experiment_id: updateProtocolDto.experiment_id,
                lab_id: updateProtocolDto.lab_id,
            },
        });
    }
    remove(id) {
        return this.prisma.protocols.delete({
            where: { id: id },
        });
    }
};
ProtocolsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ProtocolsService);
exports.ProtocolsService = ProtocolsService;
//# sourceMappingURL=protocols.service.js.map