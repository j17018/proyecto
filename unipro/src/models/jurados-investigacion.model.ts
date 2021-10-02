import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class JuradosInvestigacion extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  codigo_JI?: number;

  @property({
    type: 'number',
    required: true,
  })
  codigo_jurado: number;

  @property({
    type: 'number',
    required: true,
  })
  codigo_investigacion: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<JuradosInvestigacion>) {
    super(data);
  }
}

export interface JuradosInvestigacionRelations {
  // describe navigational properties here
}

export type JuradosInvestigacionWithRelations = JuradosInvestigacion & JuradosInvestigacionRelations;
