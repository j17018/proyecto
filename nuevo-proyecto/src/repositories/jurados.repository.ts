import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyThroughRepositoryFactory, HasManyRepositoryFactory} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {Jurados, JuradosRelations, AreaInvestigacion, JuradosInvestigacion, EvaluacionSolicitud} from '../models';
import {JuradosInvestigacionRepository} from './jurados-investigacion.repository';
import {AreaInvestigacionRepository} from './area-investigacion.repository';
import {EvaluacionSolicitudRepository} from './evaluacion-solicitud.repository';

export class JuradosRepository extends DefaultCrudRepository<
  Jurados,
  typeof Jurados.prototype.id,
  JuradosRelations
> {

  public readonly jurado_investigacion_relacion: HasManyThroughRepositoryFactory<AreaInvestigacion, typeof AreaInvestigacion.prototype.id,
          JuradosInvestigacion,
          typeof Jurados.prototype.id
        >;

  public readonly jurados_evaluacionsolicitud: HasManyRepositoryFactory<EvaluacionSolicitud, typeof Jurados.prototype.id>;

  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource, @repository.getter('JuradosInvestigacionRepository') protected juradosInvestigacionRepositoryGetter: Getter<JuradosInvestigacionRepository>, @repository.getter('AreaInvestigacionRepository') protected areaInvestigacionRepositoryGetter: Getter<AreaInvestigacionRepository>, @repository.getter('EvaluacionSolicitudRepository') protected evaluacionSolicitudRepositoryGetter: Getter<EvaluacionSolicitudRepository>,
  ) {
    super(Jurados, dataSource);
    this.jurados_evaluacionsolicitud = this.createHasManyRepositoryFactoryFor('jurados_evaluacionsolicitud', evaluacionSolicitudRepositoryGetter,);
    this.registerInclusionResolver('jurados_evaluacionsolicitud', this.jurados_evaluacionsolicitud.inclusionResolver);
    this.jurado_investigacion_relacion = this.createHasManyThroughRepositoryFactoryFor('jurado_investigacion_relacion', areaInvestigacionRepositoryGetter, juradosInvestigacionRepositoryGetter,);
    this.registerInclusionResolver('jurado_investigacion_relacion', this.jurado_investigacion_relacion.inclusionResolver);
  }
}
