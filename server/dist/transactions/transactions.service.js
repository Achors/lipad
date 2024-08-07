"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionsService = void 0;
const common_1 = require("@nestjs/common");
let TransactionsService = class TransactionsService {
    async createTransaction(userId, transactionDto) {
        return { message: 'Transaction created successfully' };
    }
    async getTransaction(transactionId) {
        return { transactionId, amount: 100, type: 'credit' };
    }
    async getUserTransactions(userId) {
        return [
            { transactionId: '1', amount: 100, type: 'credit' },
            { transactionId: '2', amount: 50, type: 'debit' },
        ];
    }
};
exports.TransactionsService = TransactionsService;
exports.TransactionsService = TransactionsService = __decorate([
    (0, common_1.Injectable)()
], TransactionsService);
//# sourceMappingURL=transactions.service.js.map