import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {Solicitud, SolicitudRelations, ProponenteTrabajo} from '../models';
import {ProponenteTrabajoRepository} from './proponente-trabajo.repository';

export class SolicitudRepository extends DefaultCrudRepository<
  Solicitud,
  typeof Solicitud.prototype.id_solicitud,
  SolicitudRelations
> {

  public readonly solicitudes: BelongsToAccessor<ProponenteTrabajo, typeof Solicitud.prototype.id_solicitud>;

  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource, @repository.getter('ProponenteTrabajoRepository') protected proponenteTrabajoRepositoryGetter: Getter<ProponenteTrabajoRepository>,
  ) {
    super(Solicitud, dataSource);
    this.solicitudes = this.createBelongsToAccessorFor('solicitudes', proponenteTrabajoRepositoryGetter,);
    this.registerInclusionResolver('solicitudes', this.solicitudes.inclusionResolver);
  }
}
