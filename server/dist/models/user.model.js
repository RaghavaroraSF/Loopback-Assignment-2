"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const role_model_1 = require("./role.model");
const customer_model_1 = require("./customer.model");
let User = class User extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        id: true,
        generated: true,
    }),
    tslib_1.__metadata("design:type", Number)
], User.prototype, "id", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "firstname", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        default: '-',
    }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "middlename", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "lastname", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "email", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "phone", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "address", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        default: 'now'
    }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "created_on", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        default: new Date(),
    }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "modified_on", void 0);
tslib_1.__decorate([
    (0, repository_1.belongsTo)(() => role_model_1.Role, { name: 'roles' }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "role", void 0);
tslib_1.__decorate([
    (0, repository_1.belongsTo)(() => customer_model_1.Customer, { keyTo: "id" }),
    tslib_1.__metadata("design:type", Number)
], User.prototype, "customerId", void 0);
User = tslib_1.__decorate([
    (0, repository_1.model)({
        name: 'users'
    }),
    tslib_1.__metadata("design:paramtypes", [Object])
], User);
exports.User = User;
//# sourceMappingURL=user.model.js.map