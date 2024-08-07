export declare class TransactionsService {
    createTransaction(userId: string, transactionDto: {
        amount: number;
        type: string;
    }): Promise<{
        message: string;
    }>;
    getTransaction(transactionId: string): Promise<{
        transactionId: string;
        amount: number;
        type: string;
    }>;
    getUserTransactions(userId: string): Promise<{
        transactionId: string;
        amount: number;
        type: string;
    }[]>;
}
