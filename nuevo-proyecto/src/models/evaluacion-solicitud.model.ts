import {Entity, model, property, hasOne} from '@loopback/repository';
import {ResultadoEvaluacion} from './resultado-evaluacion.model';

@model({settings: {strict: false}})
export class EvaluacionSolicitud extends Entity {
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
    type: 'number',
    required: true,
  })
  id_jurado: number;

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

  @hasOne(() => ResultadoEvaluacion, {keyTo: 'id_evaluacion_solicitud'})
  resultado_evaluacionsolicitud_relacion: ResultadoEvaluacion;
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
