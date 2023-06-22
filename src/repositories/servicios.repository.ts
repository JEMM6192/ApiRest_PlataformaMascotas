import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {ConexiondbDataSource} from '../datasources';
import {Servicios, ServiciosRelations} from '../models';

export class ServiciosRepository extends DefaultCrudRepository<
  Servicios,
  typeof Servicios.prototype.idServicio,
  ServiciosRelations
> {
  constructor(
    @inject('datasources.conexiondb') dataSource: ConexiondbDataSource,
  ) {
    super(Servicios, dataSource);
  }
}
