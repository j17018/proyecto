import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Recordatorios extends Entity {
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
  id_solicitud: number;

  @property({
    type: 'string',
    required: true,
  })
  resumen: string;

  @property({
    type: 'date',
    required: true,
  })
  fecha_hora: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Recordatorios>) {
    super(data);
  }
}

export interface RecordatoriosRelations {
  // describe navigational properties here
}

export type RecordatoriosWithRelations = Recordatorios & RecordatoriosRelations;
