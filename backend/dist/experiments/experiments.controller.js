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
exports.ExperimentsController = void 0;
const common_1 = require("@nestjs/common");
const experiments_service_1 = require("./experiments.service");
const create_experiment_dto_1 = require("./dto/create-experiment.dto");
const update_experiment_dto_1 = require("./dto/update-experiment.dto");
let ExperimentsController = class ExperimentsController {
    constructor(experimentsService) {
        this.experimentsService = experimentsService;
    }
    create(createExperimentDto) {
        return this.experimentsService.create(createExperimentDto);
    }
    findAll() {
        return this.experimentsService.findAll();
    }
    findOne(id) {
        return this.experimentsService.findOne(+id);
    }
    update(id, updateExperimentDto) {
        return this.experimentsService.update(+id, updateExperimentDto);
    }
    remove(id) {
        return this.experimentsService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_experiment_dto_1.CreateExperimentDto]),
    __metadata("design:returntype", void 0)
], ExperimentsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ExperimentsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ExperimentsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_experiment_dto_1.UpdateExperimentDto]),
    __metadata("design:returntype", void 0)
], ExperimentsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ExperimentsController.prototype, "remove", null);
ExperimentsController = __decorate([
    (0, common_1.Controller)('experiments'),
    __metadata("design:paramtypes", [experiments_service_1.ExperimentsService])
], ExperimentsController);
exports.ExperimentsController = ExperimentsController;
//# sourceMappingURL=experiments.controller.js.map