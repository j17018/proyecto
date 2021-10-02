import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {ResultadoEvaluacion, ResultadoEvaluacionRelations, EvaluacionSolicitud} from '../models';
import {EvaluacionSolicitudRepository} from './evaluacion-solicitud.repository';

export class ResultadoEvaluacionRepository extends DefaultCrudRepository<
  ResultadoEvaluacion,
  typeof ResultadoEvaluacion.prototype.id,
  ResultadoEvaluacionRelations
> {

  public readonly id_evaluacion_solicitudes: BelongsToAccessor<EvaluacionSolicitud, typeof ResultadoEvaluacion.prototype.id>;

  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource, @repository.getter('EvaluacionSolicitudRepository') protected evaluacionSolicitudRepositoryGetter: Getter<EvaluacionSolicitudRepository>,
  ) {
    super(ResultadoEvaluacion, dataSource);
    this.id_evaluacion_solicitudes = this.createBelongsToAccessorFor('id_evaluacion_solicitudes', evaluacionSolicitudRepositoryGetter,);
    this.registerInclusionResolver('id_evaluacion_solicitudes', this.id_evaluacion_solicitudes.inclusionResolver);
  }
}
