<<<<<<< HEAD
import {Entity, model, property, hasMany} from '@loopback/repository';
import {Recordatorios} from './recordatorios.model';
import {ComiteSolicitud} from './comite-solicitud.model';
=======
import {Entity, model, property, belongsTo} from '@loopback/repository';
import {ProponenteTrabajo} from './proponente-trabajo.model';
>>>>>>> c6a3ff1e7027b7853a783ed38ed1bb0201b5296d

@model({settings: {strict: false}})
export class Solicitud extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id_solicitud?: number;
  @property({
    type: 'date',
    required: true,
  })
  fecha_radicacion: string;

  @property({
    type: 'string',
    required: true,
  })
  nombre_trabajo: string;

  @property({
    type: 'number',
    required: true,
  })
  id_modalidad: number;

  @property({
    type: 'number',
    required: true,
  })
  id_area_investigacion: number;

  @property({
    type: 'string',
  })
  archivo_comprimido?: string;

  @property({
    type: 'string',
    required: true,
  })
  descripcion: string;

  @property({
    type: 'number',
    required: true,
  })
  id_tipo_solicitud: number;

<<<<<<< HEAD
  @hasMany(() => Recordatorios, {keyTo: 'id_solicitud'})
  recordatorios_solicityd_id_fk: Recordatorios[];

  @hasMany(() => Recordatorios, {keyTo: 'id_solicitud'})
  recordatorios_id_solicitud: Recordatorios[];

  @hasMany(() => ComiteSolicitud, {keyTo: 'id_solicitud'})
  comite_solicitudes: ComiteSolicitud[];
=======
  @belongsTo(() => ProponenteTrabajo, {name: 'solicitudes'})
  id_proponente: number;
>>>>>>> c6a3ff1e7027b7853a783ed38ed1bb0201b5296d
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Solicitud>) {
    super(data);
  }
}

export interface SolicitudRelations {
  // describe navigational properties here
}

export type SolicitudWithRelations = Solicitud & SolicitudRelations;
