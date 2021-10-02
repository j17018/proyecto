import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor, HasOneRepositoryFactory} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {EvaluacionSolicitud, EvaluacionSolicitudRelations, Jurados, ResultadoEvaluacion, Solicitud} from '../models';
import {JuradosRepository} from './jurados.repository';
import {ResultadoEvaluacionRepository} from './resultado-evaluacion.repository';
import {SolicitudRepository} from './solicitud.repository';

export class EvaluacionSolicitudRepository extends DefaultCrudRepository<
  EvaluacionSolicitud,
  typeof EvaluacionSolicitud.prototype.id,
  EvaluacionSolicitudRelations
> {

  public readonly id_jurados: BelongsToAccessor<Jurados, typeof EvaluacionSolicitud.prototype.id>;

  public readonly id_evaluacion_solicitudes: BelongsToAccessor<ResultadoEvaluacion, typeof EvaluacionSolicitud.prototype.id>;

  public readonly id_solicitudes: BelongsToAccessor<ResultadoEvaluacion, typeof EvaluacionSolicitud.prototype.id>;

  public readonly solicitudes: HasOneRepositoryFactory<Solicitud, typeof EvaluacionSolicitud.prototype.id>;

  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource, @repository.getter('JuradosRepository') protected juradosRepositoryGetter: Getter<JuradosRepository>, @repository.getter('ResultadoEvaluacionRepository') protected resultadoEvaluacionRepositoryGetter: Getter<ResultadoEvaluacionRepository>, @repository.getter('SolicitudRepository') protected solicitudRepositoryGetter: Getter<SolicitudRepository>,
  ) {
    super(EvaluacionSolicitud, dataSource);
    this.solicitudes = this.createHasOneRepositoryFactoryFor('solicitudes', solicitudRepositoryGetter);
    this.registerInclusionResolver('solicitudes', this.solicitudes.inclusionResolver);
    this.id_solicitudes = this.createBelongsToAccessorFor('id_solicitudes', resultadoEvaluacionRepositoryGetter,);
    this.registerInclusionResolver('id_solicitudes', this.id_solicitudes.inclusionResolver);
    this.id_evaluacion_solicitudes = this.createBelongsToAccessorFor('id_evaluacion_solicitudes', resultadoEvaluacionRepositoryGetter,);
    this.registerInclusionResolver('id_evaluacion_solicitudes', this.id_evaluacion_solicitudes.inclusionResolver);
    this.id_jurados = this.createBelongsToAccessorFor('id_jurados', juradosRepositoryGetter,);
    this.registerInclusionResolver('id_jurados', this.id_jurados.inclusionResolver);
  }
}
