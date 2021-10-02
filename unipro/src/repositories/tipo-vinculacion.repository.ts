import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasOneRepositoryFactory} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {TipoVinculacion, TipoVinculacionRelations, ProponenteTrabajo} from '../models';
import {ProponenteTrabajoRepository} from './proponente-trabajo.repository';

export class TipoVinculacionRepository extends DefaultCrudRepository<
  TipoVinculacion,
  typeof TipoVinculacion.prototype.id,
  TipoVinculacionRelations
> {

  public readonly tiene: HasOneRepositoryFactory<ProponenteTrabajo, typeof TipoVinculacion.prototype.id>;

  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource, @repository.getter('ProponenteTrabajoRepository') protected proponenteTrabajoRepositoryGetter: Getter<ProponenteTrabajoRepository>,
  ) {
    super(TipoVinculacion, dataSource);
    this.tiene = this.createHasOneRepositoryFactoryFor('tiene', proponenteTrabajoRepositoryGetter);
    this.registerInclusionResolver('tiene', this.tiene.inclusionResolver);
  }
}
