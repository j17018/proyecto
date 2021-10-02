import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  DepartamentoProponente,
  ProponenteTrabajo,
} from '../models';
import {DepartamentoProponenteRepository} from '../repositories';

export class DepartamentoProponenteProponenteTrabajoController {
  constructor(
    @repository(DepartamentoProponenteRepository)
    public departamentoProponenteRepository: DepartamentoProponenteRepository,
  ) { }

  @get('/departamento-proponentes/{id}/proponente-trabajo', {
    responses: {
      '200': {
        description: 'ProponenteTrabajo belonging to DepartamentoProponente',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(ProponenteTrabajo)},
          },
        },
      },
    },
  })
  async getProponenteTrabajo(
    @param.path.number('id') id: typeof DepartamentoProponente.prototype.id,
  ): Promise<ProponenteTrabajo> {
    return this.departamentoProponenteRepository.tiene(id);
  }
}
