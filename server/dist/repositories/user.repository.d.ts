import { Getter } from '@loopback/core';
import { DefaultCrudRepository, BelongsToAccessor } from '@loopback/repository';
import { PgDataSource } from '../datasources';
import { User, UserRelations, Role, Customer } from '../models';
import { RoleRepository } from './role.repository';
import { CustomerRepository } from './customer.repository';
export declare class UserRepository extends DefaultCrudRepository<User, typeof User.prototype.id, UserRelations> {
    protected roleRepositoryGetter: Getter<RoleRepository>;
    protected customerRepositoryGetter: Getter<CustomerRepository>;
    readonly customer: BelongsToAccessor<Customer, typeof User.prototype.id>;
    readonly roles: BelongsToAccessor<Role, typeof User.prototype.id>;
    constructor(dataSource: PgDataSource, roleRepositoryGetter: Getter<RoleRepository>, customerRepositoryGetter: Getter<CustomerRepository>);
}
