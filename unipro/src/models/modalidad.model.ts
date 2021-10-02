import {Entity, model, property, hasOne} from '@loopback/repository';
import {Solicitud} from './solicitud.model';

@model({settings: {strict: false}})
export class Modalidad extends Entity {
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
  nombre: string;

  @hasOne(() => Solicitud, {keyTo: 'id_modalidad'})
  id_modalidad_fk: Solicitud;
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Modalidad>) {
    super(data);
  }
}

export interface ModalidadRelations {
  // describe navigational properties here
}

export type ModalidadWithRelations = Modalidad & ModalidadRelations;
