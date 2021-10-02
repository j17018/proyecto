import {Entity, model, property, hasMany} from '@loopback/repository';
import {AreaInvestigacion} from './area-investigacion.model';
import {JuradosInvestigacion} from './jurados-investigacion.model';

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
    type: 'string',
    default: null,
  })
  telefono?: string;

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

  @hasMany(() => AreaInvestigacion, {through: {model: () => JuradosInvestigacion, keyFrom: 'codigo_jurado', keyTo: 'codigo_investigacion'}})
  JuradosInvestigacion: AreaInvestigacion[];
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
