import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TransactionController } from './controllers/transactions.controller';

@Module({
  imports: [],
  controllers: [AppController, TransactionController],
  providers: [AppService],
})
export class AppModule { }
