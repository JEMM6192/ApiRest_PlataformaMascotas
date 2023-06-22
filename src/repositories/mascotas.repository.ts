import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {ConexiondbDataSource} from '../datasources';
import {Mascotas, MascotasRelations} from '../models';

export class MascotasRepository extends DefaultCrudRepository<
  Mascotas,
  typeof Mascotas.prototype.idMascota,
  MascotasRelations
> {
  constructor(
    @inject('datasources.conexiondb') dataSource: ConexiondbDataSource,
  ) {
    super(Mascotas, dataSource);
  }
}
