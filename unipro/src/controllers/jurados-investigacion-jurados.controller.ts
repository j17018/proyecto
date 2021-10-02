import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  JuradosInvestigacion,
  Jurados,
} from '../models';
import {JuradosInvestigacionRepository} from '../repositories';

export class JuradosInvestigacionJuradosController {
  constructor(
    @repository(JuradosInvestigacionRepository)
    public juradosInvestigacionRepository: JuradosInvestigacionRepository,
  ) { }

  @get('/jurados-investigacions/{id}/jurados', {
    responses: {
      '200': {
        description: 'Jurados belonging to JuradosInvestigacion',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Jurados)},
          },
        },
      },
    },
  })
  async getJurados(
    @param.path.number('id') id: typeof JuradosInvestigacion.prototype.codigo_JI,
  ): Promise<Jurados> {
    return this.juradosInvestigacionRepository.codigo_jurados(id);
  }
}
