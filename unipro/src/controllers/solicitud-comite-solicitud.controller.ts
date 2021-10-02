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
  Solicitud,
  ComiteSolicitud,
} from '../models';
import {SolicitudRepository} from '../repositories';

export class SolicitudComiteSolicitudController {
  constructor(
    @repository(SolicitudRepository) protected solicitudRepository: SolicitudRepository,
  ) { }

  @get('/solicituds/{id}/comite-solicituds', {
    responses: {
      '200': {
        description: 'Array of Solicitud has many ComiteSolicitud',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(ComiteSolicitud)},
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<ComiteSolicitud>,
  ): Promise<ComiteSolicitud[]> {
    return this.solicitudRepository.comite_solicitudes(id).find(filter);
  }

  @post('/solicituds/{id}/comite-solicituds', {
    responses: {
      '200': {
        description: 'Solicitud model instance',
        content: {'application/json': {schema: getModelSchemaRef(ComiteSolicitud)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Solicitud.prototype.id_solicitud,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ComiteSolicitud, {
            title: 'NewComiteSolicitudInSolicitud',
            exclude: ['id'],
            optional: ['id_solicitud']
          }),
        },
      },
    }) comiteSolicitud: Omit<ComiteSolicitud, 'id'>,
  ): Promise<ComiteSolicitud> {
    return this.solicitudRepository.comite_solicitudes(id).create(comiteSolicitud);
  }

  @patch('/solicituds/{id}/comite-solicituds', {
    responses: {
      '200': {
        description: 'Solicitud.ComiteSolicitud PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ComiteSolicitud, {partial: true}),
        },
      },
    })
    comiteSolicitud: Partial<ComiteSolicitud>,
    @param.query.object('where', getWhereSchemaFor(ComiteSolicitud)) where?: Where<ComiteSolicitud>,
  ): Promise<Count> {
    return this.solicitudRepository.comite_solicitudes(id).patch(comiteSolicitud, where);
  }

  @del('/solicituds/{id}/comite-solicituds', {
    responses: {
      '200': {
        description: 'Solicitud.ComiteSolicitud DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(ComiteSolicitud)) where?: Where<ComiteSolicitud>,
  ): Promise<Count> {
    return this.solicitudRepository.comite_solicitudes(id).delete(where);
  }
}
