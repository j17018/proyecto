import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasOneRepositoryFactory} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {EvaluacionSolicitud, EvaluacionSolicitudRelations, ResultadoEvaluacion} from '../models';
import {ResultadoEvaluacionRepository} from './resultado-evaluacion.repository';

export class EvaluacionSolicitudRepository extends DefaultCrudRepository<
  EvaluacionSolicitud,
  typeof EvaluacionSolicitud.prototype.id,
  EvaluacionSolicitudRelations
> {

  public readonly resultado_evaluacionsolicitud_relacion: HasOneRepositoryFactory<ResultadoEvaluacion, typeof EvaluacionSolicitud.prototype.id>;

  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource, @repository.getter('ResultadoEvaluacionRepository') protected resultadoEvaluacionRepositoryGetter: Getter<ResultadoEvaluacionRepository>,
  ) {
    super(EvaluacionSolicitud, dataSource);
    this.resultado_evaluacionsolicitud_relacion = this.createHasOneRepositoryFactoryFor('resultado_evaluacionsolicitud_relacion', resultadoEvaluacionRepositoryGetter);
    this.registerInclusionResolver('resultado_evaluacionsolicitud_relacion', this.resultado_evaluacionsolicitud_relacion.inclusionResolver);
  }
}
