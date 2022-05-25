"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let CustomerController = class CustomerController {
    constructor(customerRepository) {
        this.customerRepository = customerRepository;
    }
    async create(customer) {
        return this.customerRepository.create(customer);
    }
    async count(where) {
        return this.customerRepository.count(where);
    }
    async find(filter) {
        return this.customerRepository.find(filter);
    }
    async updateAll(customer, where) {
        return this.customerRepository.updateAll(customer, where);
    }
    async findById(id, filter) {
        return this.customerRepository.findById(id, filter);
    }
    async updateById(id, customer) {
        await this.customerRepository.updateById(id, customer);
    }
    async replaceById(id, customer) {
        await this.customerRepository.replaceById(id, customer);
    }
    async deleteById(id) {
        await this.customerRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    (0, rest_1.post)('/customers'),
    (0, rest_1.response)(200, {
        description: 'Customer model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Customer) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Customer, {
                    title: 'NewCustomer',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CustomerController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/customers/count'),
    (0, rest_1.response)(200, {
        description: 'Customer model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Customer)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CustomerController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/customers'),
    (0, rest_1.response)(200, {
        description: 'Array of Customer model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Customer, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Customer)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CustomerController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/customers'),
    (0, rest_1.response)(200, {
        description: 'Customer PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Customer, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Customer)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Customer, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CustomerController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/customers/{id}'),
    (0, rest_1.response)(200, {
        description: 'Customer model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Customer, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Customer, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CustomerController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/customers/{id}'),
    (0, rest_1.response)(204, {
        description: 'Customer PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Customer, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Customer]),
    tslib_1.__metadata("design:returntype", Promise)
], CustomerController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/customers/{id}'),
    (0, rest_1.response)(204, {
        description: 'Customer PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Customer]),
    tslib_1.__metadata("design:returntype", Promise)
], CustomerController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/customers/{id}'),
    (0, rest_1.response)(204, {
        description: 'Customer DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], CustomerController.prototype, "deleteById", null);
CustomerController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.CustomerRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.CustomerRepository])
], CustomerController);
exports.CustomerController = CustomerController;
//# sourceMappingURL=customer.controller.js.map