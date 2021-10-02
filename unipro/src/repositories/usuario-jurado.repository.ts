import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {UsuarioJurado, UsuarioJuradoRelations, Jurados} from '../models';
import {JuradosRepository} from './jurados.repository';

export class UsuarioJuradoRepository extends DefaultCrudRepository<
  UsuarioJurado,
  typeof UsuarioJurado.prototype.id,
  UsuarioJuradoRelations
> {

  public readonly id_jurados: BelongsToAccessor<Jurados, typeof UsuarioJurado.prototype.id>;

  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource, @repository.getter('JuradosRepository') protected juradosRepositoryGetter: Getter<JuradosRepository>,
  ) {
    super(UsuarioJurado, dataSource);
    this.id_jurados = this.createBelongsToAccessorFor('id_jurados', juradosRepositoryGetter,);
    this.registerInclusionResolver('id_jurados', this.id_jurados.inclusionResolver);
  }
}
