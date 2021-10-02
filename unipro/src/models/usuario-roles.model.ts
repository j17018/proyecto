import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class UsuarioRoles extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  id_usuario: string;

  @property({
    type: 'string',
    required: true,
  })
  id_rol: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<UsuarioRoles>) {
    super(data);
  }
}

export interface UsuarioRolesRelations {
  // describe navigational properties here
}

export type UsuarioRolesWithRelations = UsuarioRoles & UsuarioRolesRelations;
