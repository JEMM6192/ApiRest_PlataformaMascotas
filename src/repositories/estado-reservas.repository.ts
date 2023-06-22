import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {ConexiondbDataSource} from '../datasources';
import {EstadoReservas, EstadoReservasRelations} from '../models';

export class EstadoReservasRepository extends DefaultCrudRepository<
  EstadoReservas,
  typeof EstadoReservas.prototype.idEstadoReserva,
  EstadoReservasRelations
> {
  constructor(
    @inject('datasources.conexiondb') dataSource: ConexiondbDataSource,
  ) {
    super(EstadoReservas, dataSource);
  }
}
