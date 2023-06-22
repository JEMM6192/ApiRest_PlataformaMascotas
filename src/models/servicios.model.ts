import {Entity, model, property} from '@loopback/repository';

@model({settings: {idInjection: false, mssql: {schema: 'dbo', table: 'Servicios'}}})
export class Servicios extends Entity {
  @property({
    type: 'number',
    required: true,
    precision: 10,
    scale: 0,
    generated: 0,
    id: 1,
    mssql: {columnName: 'Id_Servicio', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'NO', generated: 0},
  })
  idServicio: number;

  @property({
    type: 'string',
    required: true,
    length: 255,
    generated: 0,
    mssql: {columnName: 'Nombre', dataType: 'varchar', dataLength: 255, dataPrecision: null, dataScale: null, nullable: 'NO', generated: 0},
  })
  nombre: string;

  @property({
    type: 'string',
    length: 255,
    generated: 0,
    mssql: {columnName: 'Descripcion', dataType: 'varchar', dataLength: 255, dataPrecision: null, dataScale: null, nullable: 'YES', generated: 0},
  })
  descripcion?: string;

  @property({
    type: 'number',
    precision: 10,
    scale: 2,
    generated: 0,
    mssql: {columnName: 'Precio', dataType: 'decimal', dataLength: null, dataPrecision: 10, dataScale: 2, nullable: 'YES', generated: 0},
  })
  precio?: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Servicios>) {
    super(data);
  }
}

export interface ServiciosRelations {
  // describe navigational properties here
}

export type ServiciosWithRelations = Servicios & ServiciosRelations;
