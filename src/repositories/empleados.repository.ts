import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {ConexiondbDataSource} from '../datasources';
import {Empleados, EmpleadosRelations} from '../models';

export class EmpleadosRepository extends DefaultCrudRepository<
  Empleados,
  typeof Empleados.prototype.idEmpleado,
  EmpleadosRelations
> {
  constructor(
    @inject('datasources.conexiondb') dataSource: ConexiondbDataSource,
  ) {
    super(Empleados, dataSource);
  }
}
