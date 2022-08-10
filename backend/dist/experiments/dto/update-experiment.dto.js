"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateExperimentDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_experiment_dto_1 = require("./create-experiment.dto");
class UpdateExperimentDto extends (0, mapped_types_1.PartialType)(create_experiment_dto_1.CreateExperimentDto) {
}
exports.UpdateExperimentDto = UpdateExperimentDto;
//# sourceMappingURL=update-experiment.dto.js.map