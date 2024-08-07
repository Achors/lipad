import { Module, forwardRef } from '@nestjs/common';
import { AuthModule } from '../auth/auth.module';
import { TransactionsService } from './transactions.service';
import { TransactionsController } from './transactions.controller';

@Module({
  imports: [forwardRef(() => AuthModule)],
  controllers: [TransactionsController],
  providers: [TransactionsService],
})
export class TransactionsModule {}
