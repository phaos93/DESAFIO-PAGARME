import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TransactionController } from './controllers/transactions.controller';
import { PayablesService } from './database/payables.service';
import { TransactionsService } from './database/transactions.service';

@Module({
  imports: [],
  controllers: [AppController, TransactionController],
  providers: [AppService, TransactionsService, PayablesService],
})
export class AppModule { }
