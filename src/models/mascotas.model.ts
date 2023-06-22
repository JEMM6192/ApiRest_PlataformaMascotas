import {Entity, model, property} from '@loopback/repository';

@model({settings: {idInjection: false, mssql: {schema: 'dbo', table: 'Mascotas'}}})
export class Mascotas extends Entity {
  @property({
    type: 'number',
    precision: 10,
    scale: 0,
    generated: 1,
    id: 1,
    mssql: {columnName: 'Id_Mascota', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'NO', generated: 1},
  })
  idMascota?: number;

  @property({
    type: 'number',
    required: true,
    precision: 10,
    scale: 0,
    generated: 0,
    mssql: {columnName: 'Id_Cliente', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'NO', generated: 0},
  })
  idCliente: number;

  @property({
    type: 'string',
    length: 255,
    generated: 0,
    mssql: {columnName: 'Nombre', dataType: 'varchar', dataLength: 255, dataPrecision: null, dataScale: null, nullable: 'YES', generated: 0},
  })
  nombre?: string;

  @property({
    type: 'number',
    precision: 10,
    scale: 2,
    generated: 0,
    mssql: {columnName: 'Peso', dataType: 'decimal', dataLength: null, dataPrecision: 10, dataScale: 2, nullable: 'YES', generated: 0},
  })
  peso?: number;

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
    mssql: {columnName: 'Raza', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'YES', generated: 0},
  })
  raza?: string;

  @property({
    type: 'string',
    length: 10,
    generated: 0,
    mssql: {columnName: 'Sexo', dataType: 'varchar', dataLength: 10, dataPrecision: null, dataScale: null, nullable: 'YES', generated: 0},
  })
  sexo?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Mascotas>) {
    super(data);
  }
}

export interface MascotasRelations {
  // describe navigational properties here
}

export type MascotasWithRelations = Mascotas & MascotasRelations;
