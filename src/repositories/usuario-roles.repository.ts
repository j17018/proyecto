import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongoDataSource} from '../datasources';
import {UsuarioRoles, UsuarioRolesRelations} from '../models';

export class UsuarioRolesRepository extends DefaultCrudRepository<
  UsuarioRoles,
  typeof UsuarioRoles.prototype.id,
  UsuarioRolesRelations
> {
  constructor(
    @inject('datasources.mongo') dataSource: MongoDataSource,
  ) {
    super(UsuarioRoles, dataSource);
  }
}
