import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Solicitud,
  ProponenteTrabajo,
} from '../models';
import {SolicitudRepository} from '../repositories';

export class SolicitudProponenteTrabajoController {
  constructor(
    @repository(SolicitudRepository)
    public solicitudRepository: SolicitudRepository,
  ) { }

  @get('/solicituds/{id}/proponente-trabajo', {
    responses: {
      '200': {
        description: 'ProponenteTrabajo belonging to Solicitud',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(ProponenteTrabajo)},
          },
        },
      },
    },
  })
  async getProponenteTrabajo(
    @param.path.number('id') id: typeof Solicitud.prototype.id_solicitud,
  ): Promise<ProponenteTrabajo> {
    return this.solicitudRepository.solicitudes(id);
  }
}
