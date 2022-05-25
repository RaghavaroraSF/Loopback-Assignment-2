import { DefaultCrudRepository, HasManyRepositoryFactory } from '@loopback/repository';
import { PgDataSource } from '../datasources';
import { Customer, CustomerRelations, User } from '../models';
export declare class CustomerRepository extends DefaultCrudRepository<Customer, typeof Customer.prototype.id, CustomerRelations> {
    readonly users: HasManyRepositoryFactory<User, typeof Customer.prototype.id>;
    constructor(dataSource: PgDataSource);
}
