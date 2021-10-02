import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {DepartamentoProponente, DepartamentoProponenteRelations, ProponenteTrabajo, Departamento} from '../models';
import {ProponenteTrabajoRepository} from './proponente-trabajo.repository';
import {DepartamentoRepository} from './departamento.repository';

export class DepartamentoProponenteRepository extends DefaultCrudRepository<
  DepartamentoProponente,
  typeof DepartamentoProponente.prototype.id,
  DepartamentoProponenteRelations
> {

  public readonly tiene: BelongsToAccessor<ProponenteTrabajo, typeof DepartamentoProponente.prototype.id>;

  public readonly departamentos: BelongsToAccessor<Departamento, typeof DepartamentoProponente.prototype.id>;

  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource, @repository.getter('ProponenteTrabajoRepository') protected proponenteTrabajoRepositoryGetter: Getter<ProponenteTrabajoRepository>, @repository.getter('DepartamentoRepository') protected departamentoRepositoryGetter: Getter<DepartamentoRepository>,
  ) {
    super(DepartamentoProponente, dataSource);
    this.departamentos = this.createBelongsToAccessorFor('departamentos', departamentoRepositoryGetter,);
    this.registerInclusionResolver('departamentos', this.departamentos.inclusionResolver);
    this.tiene = this.createBelongsToAccessorFor('tiene', proponenteTrabajoRepositoryGetter,);
    this.registerInclusionResolver('tiene', this.tiene.inclusionResolver);
  }
}
