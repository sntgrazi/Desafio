import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../database/PrismaService';
import { CustomCepWhereInput } from '../busca-cep/dto/cep.dto'


@Injectable()
export class BuscaCepService {
  constructor(private readonly prisma: PrismaService) {}

 
  async getCepsInRadius(baseCep: number, baseKm: number){
    const cepsInRadius = await this.prisma.cep.findMany({
      where: {
        km: {
          lte: baseKm,
        },
        cep: {
          not: baseCep.toString(),
        },
      },
      select: {
        cep: true,
        km: true,
      },
    });

    return cepsInRadius.map((cep) => ({ cep: cep.cep, km: cep.km }));
  }

  async saveSearch(userId: number, cep: string, raioKm: number): Promise<void> {
    
    await this.prisma.historico.create({
      data: {
        userId,
        cep,
        raioKm,
      },
    });
  }

  async getHistoricoByUser(userId: number){
    return this.prisma.historico.findMany({
      where: {
        userId: userId,
      },
    });
  }
}
