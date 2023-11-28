import { Module } from '@nestjs/common';
import { BuscaCepService } from './busca-cep.service';
import { BuscaCepController } from './busca-cep.controller';
import { PrismaService } from 'src/database/PrismaService';

@Module({
  controllers: [BuscaCepController],
  providers: [BuscaCepService, PrismaService],
})
export class BuscaCepModule {}
