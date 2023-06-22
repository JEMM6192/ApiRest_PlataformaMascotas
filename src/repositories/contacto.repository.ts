import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {ConexiondbDataSource} from '../datasources';
import {Contacto, ContactoRelations} from '../models';

export class ContactoRepository extends DefaultCrudRepository<
  Contacto,
  typeof Contacto.prototype.idContacto,
  ContactoRelations
> {
  constructor(
    @inject('datasources.conexiondb') dataSource: ConexiondbDataSource,
  ) {
    super(Contacto, dataSource);
  }
}
