import React, {useState} from 'react';

const generateRandomId = (length) => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * chars.length);
        result += chars[randomIndex];
    }
    return result;
};
const balances = {
    Safaricom: "$100.00",
    Airtel: "$50.00",
    Telkom: "$75.00",
};

const sampleTransactions = [
    {
        id: generateRandomId(8),
        method: "MPESA",
        mobileNumber: "0701234567",
        amount: "$50.00",
        date: "2024-08-06",
        status: "Accepted",
        provider: "Safaricom"
    },
    {
        id: generateRandomId(8),
        method: "Airtel",
        mobileNumber: "0712345678",
        amount: "$30.00",
        date: "2024-08-05",
        status: "Pending",
        provider: "Airtel"
    },
    {
        id: generateRandomId(8),
        method: "T KASH",
        mobileNumber: "0723456789",
        amount: "$20.00",
        date: "2024-08-04",
        status: "Failed",
        provider: "Telkom"
    },
];

export default function Transactions() {
    const getStatusClass = (status) => {
        switch (status) {
            case 'Accepted':
                return 'text-green-500';
            case 'Failed':
                return 'text-red-500';
            case 'Pending':
                return 'text-gray-800';
            default:
                return 'text-gray-700';
        }
    };
    const [selectedProvider, setSelectedProvider] = useState("Safaricom");

    const filteredTransactions = sampleTransactions.filter(transaction => transaction.provider === selectedProvider);

    return (
        <div className="flex-1 bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Payments</h2>
            <div className="mb-6 flex gap-4">
                {Object.keys(balances).map(provider => (
                    <div 
                        key={provider}
                        className={`cursor-pointer p-4 rounded-lg ${selectedProvider === provider ? 'bg-gray-200' : 'bg-gray-100'} shadow-md`}
                        onClick={() => setSelectedProvider(provider)}
                    >
                        <h3 className="text-lg font-semibold">{provider}</h3>
                        <p className="text-xl">{balances[provider]}</p>
                    </div>
                ))}
            </div>
            <table className="min-w-full bg-white border border-gray-200">
                <thead>
                    <tr className="border-b bg-gray-100">
                        <th className="px-4 py-2 text-left text-gray-700">Transaction ID</th>
                        <th className="px-4 py-2 text-left text-gray-700">Payment Method</th>
                        <th className="px-4 py-2 text-left text-gray-700">Mobile Number</th>
                        <th className="px-4 py-2 text-left text-gray-700">Amount</th>
                        <th className="px-4 py-2 text-left text-gray-700">Date</th>
                        <th className="px-4 py-2 text-left text-gray-700">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredTransactions.map((transaction) => (
                        <tr key={transaction.id} className="border-b">
                            <td className="px-4 py-2 text-gray-700">{transaction.id}</td>
                            <td className="px-4 py-2 text-gray-700">{transaction.method}</td>
                            <td className="px-4 py-2 text-gray-700">{transaction.mobileNumber}</td>
                            <td className="px-4 py-2 text-gray-700">{transaction.amount}</td>
                            <td className="px-4 py-2 text-gray-700">{transaction.date}</td>
                            <td className={`px-4 py-2 ${transaction.status === 'Accepted' ? 'text-green-600' : transaction.status === 'Failed' ? 'text-red-600' : 'text-gray-600'}`}>
                                {transaction.status}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}