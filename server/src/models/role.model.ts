import {Entity, model, property, hasMany} from '@loopback/repository';
import {User} from './user.model';

@model({
  name: 'roles'
})
export class Role extends Entity {
  @property({
    type: 'string',
    required: true,
    id: true,
    generated: false,
    jsonSchema: {
      enum: ['superadmin','admin','subscriber']
    }
  })
  key: string;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'string',
    required: true,
  })
  description: string;

  @property({
    type: 'date',
    default: new Date(),
  })
  created_on?: string;

  @property({
    type: 'date',
    default: new Date(),
  })
  modified_on?: string;

  // @hasMany(() => User, {keyTo: 'role'})
  // users: User[];
  
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Role>) {
    super(data);
  }
}

export interface RoleRelations {
  // describe navigational properties here
}

export type RoleWithRelations = Role & RoleRelations;
