import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {ConexiondbDataSource} from '../datasources';
import {InfoUsuarios, InfoUsuariosRelations} from '../models';

export class InfoUsuariosRepository extends DefaultCrudRepository<
  InfoUsuarios,
  typeof InfoUsuarios.prototype.idInfoUsuario,
  InfoUsuariosRelations
> {
  constructor(
    @inject('datasources.conexiondb') dataSource: ConexiondbDataSource,
  ) {
    super(InfoUsuarios, dataSource);
  }
}
