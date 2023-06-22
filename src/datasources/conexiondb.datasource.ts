import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'conexiondb',
  connector: 'mssql',
  url: 'mssql://sa:Julio15pc200@localhost:20000/Plataforma_Mascotas',
  host: 'localhost',
  port: 20000,
  user: 'sa',
  password: 'Julio15pc200',
  database: 'Plataforma_Mascotas'
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class ConexiondbDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'conexiondb';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.conexiondb', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
