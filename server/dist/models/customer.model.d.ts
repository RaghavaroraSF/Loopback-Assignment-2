import { Entity } from '@loopback/repository';
export declare class Customer extends Entity {
    name: string;
    website: string;
    address: string;
    id?: number;
    created_on?: string;
    modified_on?: string;
    [prop: string]: any;
    constructor(data?: Partial<Customer>);
}
export interface CustomerRelations {
}
export declare type CustomerWithRelations = Customer & CustomerRelations;
