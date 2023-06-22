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
import {InfoUsuarios} from '../models';
import {InfoUsuariosRepository} from '../repositories';

export class InfoUsuariosController {
  constructor(
    @repository(InfoUsuariosRepository)
    public infoUsuariosRepository : InfoUsuariosRepository,
  ) {}

  @post('/info-usuarios')
  @response(200, {
    description: 'InfoUsuarios model instance',
    content: {'application/json': {schema: getModelSchemaRef(InfoUsuarios)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(InfoUsuarios, {
            title: 'NewInfoUsuarios',
            exclude: ['Id_InfoUsuario'],
          }),
        },
      },
    })
    infoUsuarios: Omit<InfoUsuarios, 'Id_InfoUsuario'>,
  ): Promise<InfoUsuarios> {
    return this.infoUsuariosRepository.create(infoUsuarios);
  }

  @get('/info-usuarios/count')
  @response(200, {
    description: 'InfoUsuarios model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(InfoUsuarios) where?: Where<InfoUsuarios>,
  ): Promise<Count> {
    return this.infoUsuariosRepository.count(where);
  }

  @get('/info-usuarios')
  @response(200, {
    description: 'Array of InfoUsuarios model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(InfoUsuarios, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(InfoUsuarios) filter?: Filter<InfoUsuarios>,
  ): Promise<InfoUsuarios[]> {
    return this.infoUsuariosRepository.find(filter);
  }

  @patch('/info-usuarios')
  @response(200, {
    description: 'InfoUsuarios PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(InfoUsuarios, {partial: true}),
        },
      },
    })
    infoUsuarios: InfoUsuarios,
    @param.where(InfoUsuarios) where?: Where<InfoUsuarios>,
  ): Promise<Count> {
    return this.infoUsuariosRepository.updateAll(infoUsuarios, where);
  }

  @get('/info-usuarios/{id}')
  @response(200, {
    description: 'InfoUsuarios model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(InfoUsuarios, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(InfoUsuarios, {exclude: 'where'}) filter?: FilterExcludingWhere<InfoUsuarios>
  ): Promise<InfoUsuarios> {
    return this.infoUsuariosRepository.findById(id, filter);
  }

  @patch('/info-usuarios/{id}')
  @response(204, {
    description: 'InfoUsuarios PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(InfoUsuarios, {partial: true}),
        },
      },
    })
    infoUsuarios: InfoUsuarios,
  ): Promise<void> {
    await this.infoUsuariosRepository.updateById(id, infoUsuarios);
  }

  @put('/info-usuarios/{id}')
  @response(204, {
    description: 'InfoUsuarios PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() infoUsuarios: InfoUsuarios,
  ): Promise<void> {
    await this.infoUsuariosRepository.replaceById(id, infoUsuarios);
  }

  @del('/info-usuarios/{id}')
  @response(204, {
    description: 'InfoUsuarios DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.infoUsuariosRepository.deleteById(id);
  }
}
