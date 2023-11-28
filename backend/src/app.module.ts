import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './modules/users/users.module';
import { BuscaCepModule } from './modules/busca-cep/busca-cep.module';

@Module({
  imports: [UsersModule, BuscaCepModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
