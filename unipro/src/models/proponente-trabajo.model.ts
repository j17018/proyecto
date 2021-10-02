import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class ProponenteTrabajo extends Entity {
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
  Documento: string;

  @property({
    type: 'string',
    required: true,
  })
  primer_nombre: string;

  @property({
    type: 'string',
  })
  otros_nombres?: string;

  @property({
    type: 'string',
    required: true,
  })
  primer_apellido: string;

  @property({
    type: 'string',
  })
  segundo_apellido?: string;

  @property({
    type: 'string',
    required: true,
  })
  correo_electronico: string;

  @property({
    type: 'string',
  })
  numero_celular?: string;

  @property({
    type: 'string',
  })
  foto?: string;

  @property({
    type: 'number',
  })
  id_tipo_vinculacion?: number;
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<ProponenteTrabajo>) {
    super(data);
  }
}

export interface ProponenteTrabajoRelations {
  // describe navigational properties here
}

export type ProponenteTrabajoWithRelations = ProponenteTrabajo & ProponenteTrabajoRelations;
