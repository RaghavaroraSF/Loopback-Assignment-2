import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Role} from './role.model';
import {Customer} from './customer.model';

@model({
  name: 'users'
})
export class User extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  firstname: string;

  @property({
    type: 'string',
    default: '-',
  })
  middlename?: string;

  @property({
    type: 'string',
    required: true,
  })
  lastname: string;

  @property({
    type: 'string',
    required: true,
  })
  email: string;

  @property({
    type: 'string',
    required: true,
  })
  phone: string;

  @property({
    type: 'string',
    required: true,
  })
  address: string;

  @property({
    type: 'string',
    default: 'now'
  })
  created_on?: string;

  @property({
    type: 'string',
    default: new Date(),
  })
  modified_on?: string;

  @belongsTo(() => Role, {name: 'roles'})
  role: string;
  @belongsTo(() => Customer, {keyTo: "id"})
  customerId: number;
  // Define well-known properties here
  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<User>) {
    super(data);
  }
}

export interface UserRelations {
  // describe navigational properties here
}

export type UserWithRelations = User & UserRelations;
