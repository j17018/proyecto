import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyThroughRepositoryFactory} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {Jurados, JuradosRelations, AreaInvestigacion, JuradosInvestigacion} from '../models';
import {JuradosInvestigacionRepository} from './jurados-investigacion.repository';
import {AreaInvestigacionRepository} from './area-investigacion.repository';

export class JuradosRepository extends DefaultCrudRepository<
  Jurados,
  typeof Jurados.prototype.id,
  JuradosRelations
> {

  public readonly JuradosInvestigacion: HasManyThroughRepositoryFactory<AreaInvestigacion, typeof AreaInvestigacion.prototype.id,
          JuradosInvestigacion,
          typeof Jurados.prototype.id
        >;

  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource, @repository.getter('JuradosInvestigacionRepository') protected juradosInvestigacionRepositoryGetter: Getter<JuradosInvestigacionRepository>, @repository.getter('AreaInvestigacionRepository') protected areaInvestigacionRepositoryGetter: Getter<AreaInvestigacionRepository>,
  ) {
    super(Jurados, dataSource);
    this.JuradosInvestigacion = this.createHasManyThroughRepositoryFactoryFor('JuradosInvestigacion', areaInvestigacionRepositoryGetter, juradosInvestigacionRepositoryGetter,);
    this.registerInclusionResolver('JuradosInvestigacion', this.JuradosInvestigacion.inclusionResolver);
  }
}
