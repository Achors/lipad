import { Transaction } from '../transactions/transaction.entity';
export declare class User {
    id: number;
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    email: string;
    transactions: Transaction[];
}
