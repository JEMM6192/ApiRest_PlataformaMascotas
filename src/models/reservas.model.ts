import {Entity, model, property} from '@loopback/repository';

@model({settings: {idInjection: false, mssql: {schema: 'dbo', table: 'Reservas'}}})
export class Reservas extends Entity {
  @property({
    type: 'number',
    precision: 10,
    scale: 0,
    generated: 1,
    id: 1,
    mssql: {columnName: 'Id_Reserva', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'NO', generated: 1},
  })
  idReserva?: number;

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
    type: 'number',
    required: true,
    precision: 10,
    scale: 0,
    generated: 0,
    mssql: {columnName: 'Id_Empleado', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'NO', generated: 0},
  })
  idEmpleado: number;

  @property({
    type: 'number',
    required: true,
    precision: 10,
    scale: 0,
    generated: 0,
    mssql: {columnName: 'Id_Mascota', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'NO', generated: 0},
  })
  idMascota: number;

  @property({
    type: 'number',
    required: true,
    precision: 10,
    scale: 0,
    generated: 0,
    mssql: {columnName: 'Id_Servicio', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'NO', generated: 0},
  })
  idServicio: number;

  @property({
    type: 'date',
    required: true,
    generated: 0,
    mssql: {columnName: 'Fecha_Reserva', dataType: 'date', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'NO', generated: 0},
  })
  fechaReserva: string;

  @property({
    type: 'date',
    generated: 0,
    mssql: {columnName: 'Hora_Inicio', dataType: 'time', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES', generated: 0},
  })
  horaInicio?: string;

  @property({
    type: 'date',
    generated: 0,
    mssql: {columnName: 'Hora_Fin', dataType: 'time', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES', generated: 0},
  })
  horaFin?: string;

  @property({
    type: 'number',
    required: true,
    precision: 10,
    scale: 0,
    generated: 0,
    mssql: {columnName: 'Id_EstadoReserva', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'NO', generated: 0},
  })
  idEstadoReserva: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Reservas>) {
    super(data);
  }
}

export interface ReservasRelations {
  // describe navigational properties here
}

export type ReservasWithRelations = Reservas & ReservasRelations;
