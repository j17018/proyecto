import {Entity, model, property, hasMany} from '@loopback/repository';
import {Departamento} from './departamento.model';

@model({settings: {strict: false}})
export class Facultad extends Entity {
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
  codigo_facultad: number;

  @property({
    type: 'string',
    required: true,
  })
  nombre: string;

  @hasMany(() => Departamento, {keyTo: 'id_facultad'})
  tiene: Departamento[];
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Facultad>) {
    super(data);
  }
}

export interface FacultadRelations {
  // describe navigational properties here
}

export type FacultadWithRelations = Facultad & FacultadRelations;
