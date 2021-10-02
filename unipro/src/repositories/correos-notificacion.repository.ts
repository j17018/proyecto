import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {CorreosNotificacion, CorreosNotificacionRelations} from '../models';

export class CorreosNotificacionRepository extends DefaultCrudRepository<
  CorreosNotificacion,
  typeof CorreosNotificacion.prototype.id,
  CorreosNotificacionRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(CorreosNotificacion, dataSource);
  }
}
