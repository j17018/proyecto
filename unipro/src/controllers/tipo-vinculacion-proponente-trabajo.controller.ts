import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  getWhereSchemaFor,
  param,
  patch,
  post,
  requestBody,
} from '@loopback/rest';
import {
  TipoVinculacion,
  ProponenteTrabajo,
} from '../models';
import {TipoVinculacionRepository} from '../repositories';

export class TipoVinculacionProponenteTrabajoController {
  constructor(
    @repository(TipoVinculacionRepository) protected tipoVinculacionRepository: TipoVinculacionRepository,
  ) { }

  @get('/tipo-vinculacions/{id}/proponente-trabajo', {
    responses: {
      '200': {
        description: 'TipoVinculacion has one ProponenteTrabajo',
        content: {
          'application/json': {
            schema: getModelSchemaRef(ProponenteTrabajo),
          },
        },
      },
    },
  })
  async get(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<ProponenteTrabajo>,
  ): Promise<ProponenteTrabajo> {
    return this.tipoVinculacionRepository.tiene(id).get(filter);
  }

  @post('/tipo-vinculacions/{id}/proponente-trabajo', {
    responses: {
      '200': {
        description: 'TipoVinculacion model instance',
        content: {'application/json': {schema: getModelSchemaRef(ProponenteTrabajo)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof TipoVinculacion.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ProponenteTrabajo, {
            title: 'NewProponenteTrabajoInTipoVinculacion',
            exclude: ['id'],
            optional: ['id_tipo_vinculacion']
          }),
        },
      },
    }) proponenteTrabajo: Omit<ProponenteTrabajo, 'id'>,
  ): Promise<ProponenteTrabajo> {
    return this.tipoVinculacionRepository.tiene(id).create(proponenteTrabajo);
  }

  @patch('/tipo-vinculacions/{id}/proponente-trabajo', {
    responses: {
      '200': {
        description: 'TipoVinculacion.ProponenteTrabajo PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ProponenteTrabajo, {partial: true}),
        },
      },
    })
    proponenteTrabajo: Partial<ProponenteTrabajo>,
    @param.query.object('where', getWhereSchemaFor(ProponenteTrabajo)) where?: Where<ProponenteTrabajo>,
  ): Promise<Count> {
    return this.tipoVinculacionRepository.tiene(id).patch(proponenteTrabajo, where);
  }

  @del('/tipo-vinculacions/{id}/proponente-trabajo', {
    responses: {
      '200': {
        description: 'TipoVinculacion.ProponenteTrabajo DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(ProponenteTrabajo)) where?: Where<ProponenteTrabajo>,
  ): Promise<Count> {
    return this.tipoVinculacionRepository.tiene(id).delete(where);
  }
}
