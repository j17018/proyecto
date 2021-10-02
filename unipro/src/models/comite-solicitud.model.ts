import {Entity, model, property, belongsTo} from '@loopback/repository';
import {TipoComite} from './tipo-comite.model';

@model({settings: {strict: false}})
export class ComiteSolicitud extends Entity {
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
  respuesta: string;

  @belongsTo(() => TipoComite, {name: 'comites_tipos_solicitud'})
  id_comite: number;
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<ComiteSolicitud>) {
    super(data);
  }
}

export interface ComiteSolicitudRelations {
  // describe navigational properties here
}

export type ComiteSolicitudWithRelations = ComiteSolicitud & ComiteSolicitudRelations;
