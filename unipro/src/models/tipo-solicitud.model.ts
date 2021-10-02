import {Entity, model, property, hasOne} from '@loopback/repository';
import {Solicitud} from './solicitud.model';

@model({settings: {strict: false}})
export class TipoSolicitud extends Entity {
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

  @property({
    type: 'string',
    required: true,
  })
  formato: string;

  @hasOne(() => Solicitud, {keyTo: 'id_tipo_solicitud'})
  solicitudes_id_fk: Solicitud;
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<TipoSolicitud>) {
    super(data);
  }
}

export interface TipoSolicitudRelations {
  // describe navigational properties here
}

export type TipoSolicitudWithRelations = TipoSolicitud & TipoSolicitudRelations;
