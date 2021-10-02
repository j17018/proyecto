import {Entity, model, property, belongsTo} from '@loopback/repository';
import {ProponenteTrabajo} from './proponente-trabajo.model';
import {Departamento} from './departamento.model';

@model({settings: {strict: false}})
export class DepartamentoProponente extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @belongsTo(() => ProponenteTrabajo, {name: 'tiene'})
  id_proponente: number;

  @belongsTo(() => Departamento, {name: 'departamentos'})
  id_departamento: number;
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<DepartamentoProponente>) {
    super(data);
  }
}

export interface DepartamentoProponenteRelations {
  // describe navigational properties here
}

export type DepartamentoProponenteWithRelations = DepartamentoProponente & DepartamentoProponenteRelations;
