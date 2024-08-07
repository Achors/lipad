import { Repository } from 'typeorm';
import { User } from './user.entity';
export declare class UsersService {
    private userRepository;
    constructor(userRepository: Repository<User>);
    findOne(username: string): Promise<User | undefined>;
    create(user: Partial<User>): Promise<User>;
    getProfile(userId: number): Promise<User>;
    updateProfile(userId: number, profileDto: {
        username: string;
    }): Promise<User>;
}
