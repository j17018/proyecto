import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {Facultad, FacultadRelations, Departamento} from '../models';
import {DepartamentoRepository} from './departamento.repository';

export class FacultadRepository extends DefaultCrudRepository<
  Facultad,
  typeof Facultad.prototype.id,
  FacultadRelations
> {

  public readonly tiene: HasManyRepositoryFactory<Departamento, typeof Facultad.prototype.id>;

  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource, @repository.getter('DepartamentoRepository') protected departamentoRepositoryGetter: Getter<DepartamentoRepository>,
  ) {
    super(Facultad, dataSource);
    this.tiene = this.createHasManyRepositoryFactoryFor('tiene', departamentoRepositoryGetter,);
    this.registerInclusionResolver('tiene', this.tiene.inclusionResolver);
  }
}
