import { TransactionsService } from './transactions.service';
export declare class TransactionsController {
    private readonly transactionsService;
    constructor(transactionsService: TransactionsService);
    createTransaction(req: any, transactionDto: {
        amount: number;
        type: string;
    }): Promise<{
        message: string;
    }>;
    getTransaction(id: string): Promise<{
        transactionId: string;
        amount: number;
        type: string;
    }>;
    getUserTransactions(req: any): Promise<{
        transactionId: string;
        amount: number;
        type: string;
    }[]>;
}
