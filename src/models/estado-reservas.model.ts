import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, mssql: {schema: 'dbo', table: 'EstadoReservas'}}
})
export class EstadoReservas extends Entity {
  @property({
    type: 'number',
    precision: 10,
    scale: 0,
    generated: 1,
    id: 1,
    mssql: {columnName: 'Id_EstadoReserva', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'NO', generated: 1},
  })
  idEstadoReserva?: number;

  @property({
    type: 'string',
    required: true,
    length: 50,
    generated: 0,
    mssql: {columnName: 'Estado', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'NO', generated: 0},
  })
  estado: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<EstadoReservas>) {
    super(data);
  }
}

export interface EstadoReservasRelations {
  // describe navigational properties here
}

export type EstadoReservasWithRelations = EstadoReservas & EstadoReservasRelations;
