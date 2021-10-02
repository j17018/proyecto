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
  EvaluacionSolicitud,
  Solicitud,
} from '../models';
import {EvaluacionSolicitudRepository} from '../repositories';

export class EvaluacionSolicitudSolicitudController {
  constructor(
    @repository(EvaluacionSolicitudRepository) protected evaluacionSolicitudRepository: EvaluacionSolicitudRepository,
  ) { }

  @get('/evaluacion-solicituds/{id}/solicitud', {
    responses: {
      '200': {
        description: 'EvaluacionSolicitud has one Solicitud',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Solicitud),
          },
        },
      },
    },
  })
  async get(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<Solicitud>,
  ): Promise<Solicitud> {
    return this.evaluacionSolicitudRepository.solicitudes(id).get(filter);
  }

  @post('/evaluacion-solicituds/{id}/solicitud', {
    responses: {
      '200': {
        description: 'EvaluacionSolicitud model instance',
        content: {'application/json': {schema: getModelSchemaRef(Solicitud)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof EvaluacionSolicitud.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Solicitud, {
            title: 'NewSolicitudInEvaluacionSolicitud',
            exclude: ['id_solicitud'],
            optional: ['id_solicitud']
          }),
        },
      },
    }) solicitud: Omit<Solicitud, 'id_solicitud'>,
  ): Promise<Solicitud> {
    return this.evaluacionSolicitudRepository.solicitudes(id).create(solicitud);
  }

  @patch('/evaluacion-solicituds/{id}/solicitud', {
    responses: {
      '200': {
        description: 'EvaluacionSolicitud.Solicitud PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Solicitud, {partial: true}),
        },
      },
    })
    solicitud: Partial<Solicitud>,
    @param.query.object('where', getWhereSchemaFor(Solicitud)) where?: Where<Solicitud>,
  ): Promise<Count> {
    return this.evaluacionSolicitudRepository.solicitudes(id).patch(solicitud, where);
  }

  @del('/evaluacion-solicituds/{id}/solicitud', {
    responses: {
      '200': {
        description: 'EvaluacionSolicitud.Solicitud DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Solicitud)) where?: Where<Solicitud>,
  ): Promise<Count> {
    return this.evaluacionSolicitudRepository.solicitudes(id).delete(where);
  }
}
