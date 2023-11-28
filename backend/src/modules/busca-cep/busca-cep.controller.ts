import { Controller,Get,Post, Body, Param, ParseIntPipe, BadRequestException} from '@nestjs/common';
import { BuscaCepService } from './busca-cep.service';

@Controller('busca-cep')

export class BuscaCepController {
  constructor(private readonly cepService: BuscaCepService) {}

  @Get(':baseCep/:baseKm')
  getCepsInRadius(
    @Param('baseCep', ParseIntPipe) baseCep: number,
    @Param('baseKm', ParseIntPipe) baseKm: number,
  ) {
    return this.cepService.getCepsInRadius(baseCep, baseKm);
  }

  @Post('/save-search')
  async saveSearch(@Body() data: { userId: number; cep: string; raioKm: number }): Promise<void> {
    const { userId, cep, raioKm } = data;
    await this.cepService.saveSearch(userId, cep, raioKm);
  }

  @Post('/byUser/:userId')
  async getHistoricoByUser(@Param('userId') userId: string) {
  const id = parseInt(userId, 10);
  return this.cepService.getHistoricoByUser(id);
}

}


