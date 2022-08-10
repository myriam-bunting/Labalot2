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
exports.ExperimentsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
let ExperimentsService = class ExperimentsService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    create(createExperimentDto) {
        return this.prisma.experiments.create({
            data: {
                protocol_id: createExperimentDto.protocol_id,
                start_date: createExperimentDto.start_date,
                end_date: createExperimentDto.end_date,
                description: createExperimentDto.description,
            },
        });
    }
    findAll() {
        return this.prisma.experiments.findMany();
    }
    findOne(id) {
        return this.prisma.experiments.findUnique({
            where: { id: id },
        });
    }
    update(id, updateExperimentDto) {
        return this.prisma.experiments.update({
            where: { id: id },
            data: {
                protocol_id: updateExperimentDto.protocol_id,
                start_date: updateExperimentDto.start_date,
                end_date: updateExperimentDto.end_date,
                description: updateExperimentDto.description,
            },
        });
    }
    remove(id) {
        return this.prisma.experiments.delete({
            where: { id: id },
        });
    }
};
ExperimentsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ExperimentsService);
exports.ExperimentsService = ExperimentsService;
//# sourceMappingURL=experiments.service.js.map