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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
let UsersService = class UsersService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    create(createUserDto) {
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
    findOne(id) {
        return this.prisma.users.findUnique({
            where: {
                id: id,
            },
        });
    }
    update(id, updateUserDto) {
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
    remove(id) {
        return this.prisma.users.delete({
            where: {
                id: id,
            },
        });
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map