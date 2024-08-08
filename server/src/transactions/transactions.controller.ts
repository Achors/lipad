import {
  Controller,
  Post,
  Get,
  Param,
  Body,
  Req,
  UseGuards,
} from '@nestjs/common';
import { TransactionsService } from './transactions.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('transactions')
export class TransactionsController {
  constructor(private readonly transactionsService: TransactionsService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  async createTransaction(
    @Req() req,
    @Body() transactionDto: { amount: number; type: string },
  ) {
    return this.transactionsService.createTransaction(
      req.user.userId,
      transactionDto,
    );
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async getTransaction(@Param('id') id: string) {
    return this.transactionsService.getTransaction(id);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  async getUserTransactions(@Req() req) {
    return this.transactionsService.getUserTransactions(req.user.userId);
  }
}
