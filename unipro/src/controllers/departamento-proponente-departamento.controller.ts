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
  Departamento,
} from '../models';
import {DepartamentoProponenteRepository} from '../repositories';

export class DepartamentoProponenteDepartamentoController {
  constructor(
    @repository(DepartamentoProponenteRepository)
    public departamentoProponenteRepository: DepartamentoProponenteRepository,
  ) { }

  @get('/departamento-proponentes/{id}/departamento', {
    responses: {
      '200': {
        description: 'Departamento belonging to DepartamentoProponente',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Departamento)},
          },
        },
      },
    },
  })
  async getDepartamento(
    @param.path.number('id') id: typeof DepartamentoProponente.prototype.id,
  ): Promise<Departamento> {
    return this.departamentoProponenteRepository.departamentos(id);
  }
}
