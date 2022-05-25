"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Role = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let Role = class Role extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
        id: true,
        generated: false,
        jsonSchema: {
            enum: ['superadmin', 'admin', 'subscriber']
        }
    }),
    tslib_1.__metadata("design:type", String)
], Role.prototype, "key", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Role.prototype, "name", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Role.prototype, "description", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'date',
        default: new Date(),
    }),
    tslib_1.__metadata("design:type", String)
], Role.prototype, "created_on", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'date',
        default: new Date(),
    }),
    tslib_1.__metadata("design:type", String)
], Role.prototype, "modified_on", void 0);
Role = tslib_1.__decorate([
    (0, repository_1.model)({
        name: 'roles'
    }),
    tslib_1.__metadata("design:paramtypes", [Object])
], Role);
exports.Role = Role;
//# sourceMappingURL=role.model.js.map