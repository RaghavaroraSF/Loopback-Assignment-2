import { DefaultCrudRepository, HasManyRepositoryFactory } from '@loopback/repository';
import { PgDataSource } from '../datasources';
import { Role, RoleRelations, User } from '../models';
export declare class RoleRepository extends DefaultCrudRepository<Role, typeof Role.prototype.id, RoleRelations> {
    readonly users: HasManyRepositoryFactory<User, typeof Role.prototype.id>;
    constructor(dataSource: PgDataSource);
}
