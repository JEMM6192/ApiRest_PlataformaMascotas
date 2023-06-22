import {Entity, model, property} from '@loopback/repository';

@model({settings: {idInjection: false, mssql: {schema: 'dbo', table: 'Usuarios'}}})
export class Usuarios extends Entity {
  @property({
    type: 'number',
    precision: 10,
    scale: 0,
    generated: 1,
    id: 1,
    mssql: {columnName: 'Id_Usuario', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'NO', generated: 1},
  })
  idUsuario?: number;

  @property({
    type: 'string',
    required: true,
    length: 50,
    generated: 0,
    mssql: {columnName: 'Nombre_Usuario', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'NO', generated: 0},
  })
  nombreUsuario: string;

  @property({
    type: 'string',
    length: 225,
    generated: 0,
    mssql: {columnName: 'Contraseña', dataType: 'varchar', dataLength: 225, dataPrecision: null, dataScale: null, nullable: 'YES', generated: 0},
  })
  contraseA?: string;

  @property({
    type: 'number',
    precision: 10,
    scale: 0,
    generated: 0,
    mssql: {columnName: 'Id_Rol', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'YES', generated: 0},
  })
  idRol?: number;


  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Usuarios>) {
    super(data);
  }
}

export interface UsuariosRelations {
  // describe navigational properties here
}

export type UsuariosWithRelations = Usuarios & UsuariosRelations;
