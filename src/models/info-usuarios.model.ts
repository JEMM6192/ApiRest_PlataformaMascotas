import {Entity, model, property} from '@loopback/repository';

@model({settings: {idInjection: false, mssql: {schema: 'dbo', table: 'InfoUsuarios'}}})
export class InfoUsuarios extends Entity {
  @property({
    type: 'number',
    precision: 10,
    scale: 0,
    generated: 1,
    id: 1,
    mssql: {columnName: 'Id_InfoUsuario', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'NO', generated: 1},
  })
  idInfoUsuario?: number;

  @property({
    type: 'string',
    length: 255,
    generated: 0,
    mssql: {columnName: 'Nombre', dataType: 'varchar', dataLength: 255, dataPrecision: null, dataScale: null, nullable: 'YES', generated: 0},
  })
  nombre?: string;

  @property({
    type: 'string',
    length: 255,
    generated: 0,
    mssql: {columnName: 'Apellido', dataType: 'varchar', dataLength: 255, dataPrecision: null, dataScale: null, nullable: 'YES', generated: 0},
  })
  apellido?: string;

  @property({
    type: 'number',
    required: true,
    precision: 10,
    scale: 0,
    generated: 0,
    mssql: {columnName: 'Dni', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'NO', generated: 0},
  })
  dni: number;

  @property({
    type: 'date',
    generated: 0,
    mssql: {columnName: 'Fecha_Nacimiento', dataType: 'date', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES', generated: 0},
  })
  fechaNacimiento?: string;

  @property({
    type: 'string',
    length: 50,
    generated: 0,
    mssql: {columnName: 'Sexo', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'YES', generated: 0},
  })
  sexo?: string;

  @property({
    type: 'number',
    precision: 10,
    scale: 0,
    generated: 0,
    mssql: {columnName: 'Id_Contacto', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'YES', generated: 0},
  })
  idContacto?: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<InfoUsuarios>) {
    super(data);
  }
}

export interface InfoUsuariosRelations {
  // describe navigational properties here
}

export type InfoUsuariosWithRelations = InfoUsuarios & InfoUsuariosRelations;
