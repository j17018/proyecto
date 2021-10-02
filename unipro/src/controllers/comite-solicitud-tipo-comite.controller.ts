import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  ComiteSolicitud,
  TipoComite,
} from '../models';
import {ComiteSolicitudRepository} from '../repositories';

export class ComiteSolicitudTipoComiteController {
  constructor(
    @repository(ComiteSolicitudRepository)
    public comiteSolicitudRepository: ComiteSolicitudRepository,
  ) { }

  @get('/comite-solicituds/{id}/tipo-comite', {
    responses: {
      '200': {
        description: 'TipoComite belonging to ComiteSolicitud',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(TipoComite)},
          },
        },
      },
    },
  })
  async getTipoComite(
    @param.path.number('id') id: typeof ComiteSolicitud.prototype.id,
  ): Promise<TipoComite> {
    return this.comiteSolicitudRepository.comites_tipos_solicitud(id);
  }
}
