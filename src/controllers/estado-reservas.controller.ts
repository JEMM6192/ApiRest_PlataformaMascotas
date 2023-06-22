import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {EstadoReservas} from '../models';
import {EstadoReservasRepository} from '../repositories';

export class EstadoReservasController {
  constructor(
    @repository(EstadoReservasRepository)
    public estadoReservasRepository : EstadoReservasRepository,
  ) {}

  @post('/estado-reservas')
  @response(200, {
    description: 'EstadoReservas model instance',
    content: {'application/json': {schema: getModelSchemaRef(EstadoReservas)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(EstadoReservas, {
            title: 'NewEstadoReservas',
            exclude: ['Id_EstadoReserva'],
          }),
        },
      },
    })
    estadoReservas: Omit<EstadoReservas, 'Id_EstadoReserva'>,
  ): Promise<EstadoReservas> {
    return this.estadoReservasRepository.create(estadoReservas);
  }

  @get('/estado-reservas/count')
  @response(200, {
    description: 'EstadoReservas model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(EstadoReservas) where?: Where<EstadoReservas>,
  ): Promise<Count> {
    return this.estadoReservasRepository.count(where);
  }

  @get('/estado-reservas')
  @response(200, {
    description: 'Array of EstadoReservas model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(EstadoReservas, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(EstadoReservas) filter?: Filter<EstadoReservas>,
  ): Promise<EstadoReservas[]> {
    return this.estadoReservasRepository.find(filter);
  }

  @patch('/estado-reservas')
  @response(200, {
    description: 'EstadoReservas PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(EstadoReservas, {partial: true}),
        },
      },
    })
    estadoReservas: EstadoReservas,
    @param.where(EstadoReservas) where?: Where<EstadoReservas>,
  ): Promise<Count> {
    return this.estadoReservasRepository.updateAll(estadoReservas, where);
  }

  @get('/estado-reservas/{id}')
  @response(200, {
    description: 'EstadoReservas model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(EstadoReservas, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(EstadoReservas, {exclude: 'where'}) filter?: FilterExcludingWhere<EstadoReservas>
  ): Promise<EstadoReservas> {
    return this.estadoReservasRepository.findById(id, filter);
  }

  @patch('/estado-reservas/{id}')
  @response(204, {
    description: 'EstadoReservas PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(EstadoReservas, {partial: true}),
        },
      },
    })
    estadoReservas: EstadoReservas,
  ): Promise<void> {
    await this.estadoReservasRepository.updateById(id, estadoReservas);
  }

  @put('/estado-reservas/{id}')
  @response(204, {
    description: 'EstadoReservas PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() estadoReservas: EstadoReservas,
  ): Promise<void> {
    await this.estadoReservasRepository.replaceById(id, estadoReservas);
  }

  @del('/estado-reservas/{id}')
  @response(204, {
    description: 'EstadoReservas DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.estadoReservasRepository.deleteById(id);
  }
}
