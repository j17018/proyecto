import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Jurados extends Entity {
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
  nombre_completo: string;

  @property({
    type: 'number',
    required: true,
  })
  telefono: number;

  @property({
    type: 'string',
    required: true,
  })
  correo_electronico: string;

  @property({
    type: 'string',
    required: true,
  })
  entidad: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Jurados>) {
    super(data);
  }
}

export interface JuradosRelations {
  // describe navigational properties here
}

export type JuradosWithRelations = Jurados & JuradosRelations;
