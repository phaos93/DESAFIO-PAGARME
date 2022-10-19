import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize/dist/sequelize.module';
import { TransactionController } from './controllers/transactions.controller';
import { PayablesService } from './services/payables.service';
import { TransactionsService } from './services/transactions.service';
import { Payable } from './models/payables.model';
import { Transaction } from './models/transactions.model';
import { ConfigModule } from '@nestjs/config/dist/config.module';
import { PayableController } from './controllers/payables.controller';
import { BalanceController } from './controllers/balance.controller';
import { BalanceService } from './services/balance.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      autoLoadModels: true,
      synchronize: true,
    }),
    SequelizeModule.forFeature([Transaction, Payable]),
  ],
  controllers: [TransactionController, PayableController, BalanceController],
  providers: [TransactionsService, PayablesService, BalanceService],
})
export class AppModule { }
