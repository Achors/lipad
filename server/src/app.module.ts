import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { TransactionsModule } from './transactions/transactions.module';
import { User } from './users/user.entity';
import { Transaction } from './transactions/transaction.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'lipad_user',
      password: 'your_password',
      database: 'lipad',
      entities: [User, Transaction],
      synchronize: true,
    }),
    AuthModule,
    UsersModule,
    TransactionsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
