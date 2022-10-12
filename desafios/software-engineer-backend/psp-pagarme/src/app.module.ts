import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize/dist/sequelize.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TransactionController } from './controllers/transactions.controller';
import { PayablesService } from './database/payables.service';
import { TransactionsService } from './database/transactions.service';
import { Payable } from './models/payables.model';
import { Transaction } from './models/transactions.model';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'SQL123456',
      database: 'psppagarme',
      autoLoadModels: true,
      synchronize: true,
    }),
    SequelizeModule.forFeature([Transaction, Payable]),
  ],
  controllers: [AppController, TransactionController],
  providers: [AppService, TransactionsService, PayablesService],
})
export class AppModule { }
