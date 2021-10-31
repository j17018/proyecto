import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {JuradosInvestigacion, JuradosInvestigacionRelations} from '../models';

export class JuradosInvestigacionRepository extends DefaultCrudRepository<
  JuradosInvestigacion,
  typeof JuradosInvestigacion.prototype.codigo_JI,
  JuradosInvestigacionRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(JuradosInvestigacion, dataSource);
  }
}
