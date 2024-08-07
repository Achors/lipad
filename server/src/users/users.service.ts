import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async findOne(username: string): Promise<User | undefined> {
    return this.usersRepository.findOne({ where: { username } });
  }

  async create(user: Partial<User>): Promise<User> {
    const newUser = this.usersRepository.create(user);
    return this.usersRepository.save(newUser);
  }

  async getProfile(userId: number): Promise<User> {
    return this.usersRepository.findOne({ where: { id: userId } });
  }

  async updateProfile(userId: number, profileDto: Partial<User>): Promise<User> {
    await this.usersRepository.update(userId, profileDto);
    return this.usersRepository.findOne({ where: { id: userId } });
  }
}
