"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CagesModule = void 0;
const common_1 = require("@nestjs/common");
const cages_service_1 = require("./cages.service");
const cages_controller_1 = require("./cages.controller");
const prisma_service_1 = require("../prisma.service");
let CagesModule = class CagesModule {
};
CagesModule = __decorate([
    (0, common_1.Module)({
        controllers: [cages_controller_1.CagesController],
        providers: [cages_service_1.CagesService, prisma_service_1.PrismaService],
    })
], CagesModule);
exports.CagesModule = CagesModule;
//# sourceMappingURL=cages.module.js.map