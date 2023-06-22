import {Entity, model, property} from '@loopback/repository';

@model({settings: {idInjection: false, mssql: {schema: 'dbo', table: 'Contacto'}}})
export class Contacto extends Entity {
  @property({
    type: 'number',
    precision: 10,
    scale: 0,
    generated: 1,
    id: 1,
    mssql: {columnName: 'Id_Contacto', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'NO', generated: 1},
  })
  idContacto?: number;

  @property({
    type: 'string',
    length: 255,
    generated: 0,
    mssql: {columnName: 'Correo_Electronico', dataType: 'varchar', dataLength: 255, dataPrecision: null, dataScale: null, nullable: 'YES', generated: 0},
  })
  correoElectronico?: string;

  @property({
    type: 'number',
    required: true,
    precision: 10,
    scale: 0,
    generated: 0,
    mssql: {columnName: 'Telefono', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'NO', generated: 0},
  })
  telefono: number;

  @property({
    type: 'string',
    length: 255,
    generated: 0,
    mssql: {columnName: 'Direccion', dataType: 'varchar', dataLength: 255, dataPrecision: null, dataScale: null, nullable: 'YES', generated: 0},
  })
  direccion?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Contacto>) {
    super(data);
  }
}

export interface ContactoRelations {
  // describe navigational properties here
}

export type ContactoWithRelations = Contacto & ContactoRelations;
