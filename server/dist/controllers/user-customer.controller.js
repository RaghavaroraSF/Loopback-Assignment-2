"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCustomerController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let UserCustomerController = class UserCustomerController {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async getCustomer(id) {
        return this.userRepository.customer(id);
    }
};
tslib_1.__decorate([
    (0, rest_1.get)('/users/{id}/customer', {
        responses: {
            '200': {
                description: 'Customer belonging to User',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: (0, rest_1.getModelSchemaRef)(models_1.Customer) },
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UserCustomerController.prototype, "getCustomer", null);
UserCustomerController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.UserRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.UserRepository])
], UserCustomerController);
exports.UserCustomerController = UserCustomerController;
//# sourceMappingURL=user-customer.controller.js.map