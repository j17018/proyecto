import {Entity, model, property, belongsTo, hasOne} from '@loopback/repository';
import {Jurados} from './jurados.model';
import {ResultadoEvaluacion} from './resultado-evaluacion.model';
import {Solicitud} from './solicitud.model';

@model({settings: {strict: false}})
export class EvaluacionSolicitud extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;
  @property({
    type: 'date',
    required: true,
  })
  fecha_invitacion: string;

  @property({
    type: 'date',
    required: true,
  })
  fecha_respuesta: string;

  @property({
    type: 'boolean',
    required: true,
  })
  respuesta: boolean;

  @property({
    type: 'string',
    required: true,
  })
  observaciones: string;

  @belongsTo(() => Jurados, {name: 'id_jurados'})
  id_jurado: number;

  @belongsTo(() => ResultadoEvaluacion, {name: 'id_evaluacion_solicitudes'})
  id_evaluacion_solicitud: number;

  @belongsTo(() => ResultadoEvaluacion, {name: 'id_solicitudes'})
  id_solicitud: number;

  @hasOne(() => Solicitud, {keyTo: 'id_solicitud'})
  solicitudes: Solicitud;
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<EvaluacionSolicitud>) {
    super(data);
  }
}

export interface EvaluacionSolicitudRelations {
  // describe navigational properties here
}

export type EvaluacionSolicitudWithRelations = EvaluacionSolicitud & EvaluacionSolicitudRelations;
