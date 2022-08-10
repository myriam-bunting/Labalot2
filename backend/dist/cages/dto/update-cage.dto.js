"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCageDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_cage_dto_1 = require("./create-cage.dto");
class UpdateCageDto extends (0, mapped_types_1.PartialType)(create_cage_dto_1.CreateCageDto) {
}
exports.UpdateCageDto = UpdateCageDto;
//# sourceMappingURL=update-cage.dto.js.map