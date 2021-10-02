import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class UsuarioJurado extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'number',
    required: true,
  })
  id_jurado: number;

  @property({
    type: 'string',
    required: true,
  })
  clave: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<UsuarioJurado>) {
    super(data);
  }
}

export interface UsuarioJuradoRelations {
  // describe navigational properties here
}

export type UsuarioJuradoWithRelations = UsuarioJurado & UsuarioJuradoRelations;
