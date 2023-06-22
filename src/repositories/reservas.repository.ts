import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {ConexiondbDataSource} from '../datasources';
import {Reservas, ReservasRelations} from '../models';

export class ReservasRepository extends DefaultCrudRepository<
  Reservas,
  typeof Reservas.prototype.idReserva,
  ReservasRelations
> {
  constructor(
    @inject('datasources.conexiondb') dataSource: ConexiondbDataSource,
  ) {
    super(Reservas, dataSource);
  }
}
