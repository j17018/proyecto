import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class CorreosNotificacion extends Entity {
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
  correo_electronico: string;

  @property({
    type: 'string',
    required: true,
  })
  estado: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<CorreosNotificacion>) {
    super(data);
  }
}

export interface CorreosNotificacionRelations {
  // describe navigational properties here
}

export type CorreosNotificacionWithRelations = CorreosNotificacion & CorreosNotificacionRelations;
