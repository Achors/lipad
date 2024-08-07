import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [JwtAuthGuard, UsersService],
  controllers: [UsersController],
  exports: [UsersService],
})
export class UsersModule {}
