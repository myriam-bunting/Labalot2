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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CagesController = void 0;
const common_1 = require("@nestjs/common");
const cages_service_1 = require("./cages.service");
const create_cage_dto_1 = require("./dto/create-cage.dto");
const update_cage_dto_1 = require("./dto/update-cage.dto");
let CagesController = class CagesController {
    constructor(cagesService) {
        this.cagesService = cagesService;
    }
    create(createCageDto) {
        return this.cagesService.create(createCageDto);
    }
    findAll() {
        return this.cagesService.findAll();
    }
    findOne(id) {
        return this.cagesService.findOne(+id);
    }
    update(id, updateCageDto) {
        return this.cagesService.update(+id, updateCageDto);
    }
    remove(id) {
        return this.cagesService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_cage_dto_1.CreateCageDto]),
    __metadata("design:returntype", void 0)
], CagesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CagesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CagesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_cage_dto_1.UpdateCageDto]),
    __metadata("design:returntype", void 0)
], CagesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CagesController.prototype, "remove", null);
CagesController = __decorate([
    (0, common_1.Controller)('cages'),
    __metadata("design:paramtypes", [cages_service_1.CagesService])
], CagesController);
exports.CagesController = CagesController;
//# sourceMappingURL=cages.controller.js.map