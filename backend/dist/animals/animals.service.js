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
exports.AnimalsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
let AnimalsService = class AnimalsService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    create(createAnimalDto) {
        return this.prisma.animals.create({
            data: {
                tag: createAnimalDto.tag,
                genotype: createAnimalDto.genotype,
                gender: createAnimalDto.gender,
                birth_date: createAnimalDto.birth_date,
                phenotype: createAnimalDto.phenotype,
                experiment_id: createAnimalDto.experiment_id,
                culled_date: createAnimalDto.culled_date,
                cage_name: createAnimalDto.cage_name,
            },
        });
    }
    async findAll() {
        return this.prisma.animals.findMany({});
    }
    findOne(id) {
        return this.prisma.animals.findUnique({
            where: {
                id: id,
            },
        });
    }
    update(id, updateAnimalDto) {
        return this.prisma.animals.update({
            where: { id: id },
            data: {
                tag: updateAnimalDto.tag,
                genotype: updateAnimalDto.genotype,
                gender: updateAnimalDto.gender,
                birth_date: updateAnimalDto.birth_date,
                phenotype: updateAnimalDto.phenotype,
                experiment_id: updateAnimalDto.experiment_id,
                culled_date: updateAnimalDto.culled_date,
            },
        });
    }
    remove(id) {
        return this.prisma.animals.delete({
            where: {
                id: id,
            },
        });
    }
};
AnimalsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], AnimalsService);
exports.AnimalsService = AnimalsService;
//# sourceMappingURL=animals.service.js.map