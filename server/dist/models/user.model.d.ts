import { Entity } from '@loopback/repository';
export declare class User extends Entity {
    id?: number;
    firstname: string;
    middlename?: string;
    lastname: string;
    email: string;
    phone: string;
    address: string;
    created_on?: string;
    modified_on?: string;
    role: string;
    customerId: number;
    [prop: string]: any;
    constructor(data?: Partial<User>);
}
export interface UserRelations {
}
export declare type UserWithRelations = User & UserRelations;
