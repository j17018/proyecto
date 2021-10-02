import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {JuradosInvestigacion, JuradosInvestigacionRelations, Jurados} from '../models';
import {JuradosRepository} from './jurados.repository';

export class JuradosInvestigacionRepository extends DefaultCrudRepository<
  JuradosInvestigacion,
  typeof JuradosInvestigacion.prototype.codigo_JI,
  JuradosInvestigacionRelations
> {

  public readonly codigo_jurados: BelongsToAccessor<Jurados, typeof JuradosInvestigacion.prototype.codigo_JI>;

  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource, @repository.getter('JuradosRepository') protected juradosRepositoryGetter: Getter<JuradosRepository>,
  ) {
    super(JuradosInvestigacion, dataSource);
    this.codigo_jurados = this.createBelongsToAccessorFor('codigo_jurados', juradosRepositoryGetter,);
    this.registerInclusionResolver('codigo_jurados', this.codigo_jurados.inclusionResolver);
  }
}
