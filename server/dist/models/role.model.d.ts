import { Entity } from '@loopback/repository';
export declare class Role extends Entity {
    key: string;
    name: string;
    description: string;
    created_on?: string;
    modified_on?: string;
    [prop: string]: any;
    constructor(data?: Partial<Role>);
}
export interface RoleRelations {
}
export declare type RoleWithRelations = Role & RoleRelations;
