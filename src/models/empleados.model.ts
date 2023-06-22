import {Entity, model, property} from '@loopback/repository';

@model({settings: {idInjection: false, mssql: {schema: 'dbo', table: 'Empleados'}}})
export class Empleados extends Entity {
  @property({
    type: 'number',
    required: true,
    precision: 10,
    scale: 0,
    generated: 0,
    id: 1,
    mssql: {columnName: 'Id_Empleado', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'NO', generated: 0},
  })
  idEmpleado: number;

  @property({
    type: 'number',
    required: true,
    precision: 10,
    scale: 0,
    generated: 0,
    mssql: {columnName: 'Id_Usuario', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'NO', generated: 0},
  })
  idUsuario: number;

  @property({
    type: 'number',
    required: true,
    precision: 10,
    scale: 0,
    generated: 0,
    mssql: {columnName: 'Info_Empleado', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'NO', generated: 0},
  })
  infoEmpleado: number;

  @property({
    type: 'string',
    length: 225,
    generated: 0,
    mssql: {columnName: 'Profesion', dataType: 'varchar', dataLength: 225, dataPrecision: null, dataScale: null, nullable: 'YES', generated: 0},
  })
  profesion?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Empleados>) {
    super(data);
  }
}

export interface EmpleadosRelations {
  // describe navigational properties here
}

export type EmpleadosWithRelations = Empleados & EmpleadosRelations;
