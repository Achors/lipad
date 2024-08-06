import React, { useState } from 'react';
import { Dialog } from '@headlessui/react';


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
        provider: "Safaricom",
    },
    {
        id: generateRandomId(8),
        method: "Airtel",
        mobileNumber: "0785345678",
        amount: "$30.00",
        date: "2024-08-05",
        status: "Pending",
        provider: "Airtel",
    },
    {
        id: generateRandomId(8),
        method: "T KASH",
        mobileNumber: "0753456789",
        amount: "$20.00",
        date: "2024-08-04",
        status: "Failed",
        provider: "Telkom",
    },
    {
        id: generateRandomId(8),
        method: "MPESA",
        mobileNumber: "0720234567",
        amount: "$80.00",
        date: "2024-08-06",
        status: "Failed",
        provider: "Safaricom",
    },
    {
        id: generateRandomId(8),
        method: "Airtel",
        mobileNumber: "0791234567",
        amount: "$575.00",
        date: "2024-08-06",
        status: "Accepted",
        provider: "Airtel",
    },
];
export default function Transactions() {
    const [selectedProvider, setSelectedProvider] = useState("Safaricom");
    const [selectedDate, setSelectedDate] = useState("All");
    const [selectedStatus, setSelectedStatus] = useState("All");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentProvider, setCurrentProvider] = useState("");

    const filteredTransactions = sampleTransactions.filter(transaction => {
        return (
            (selectedProvider === "All" || transaction.provider === selectedProvider) &&
            (selectedDate === "All" || transaction.date === selectedDate) &&
            (selectedStatus === "All" || transaction.status === selectedStatus)
        );
    });

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

    const handleProviderClick = (provider) => {
        setCurrentProvider(provider);
        setIsModalOpen(true);
    };

    return (
        <div className="flex-1 bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Payments</h2>
            <div className="mb-6 flex gap-4">
                <div className="flex gap-4">
                    {Object.keys(balances).map(provider => (
                        <div 
                            key={provider}
                            className={`cursor-pointer p-4 rounded-lg ${selectedProvider === provider ? 'bg-gray-200' : 'bg-gray-100'} shadow-md`}
                            onClick={() => handleProviderClick(provider)}
                        >
                            <h3 className="text-lg font-semibold">{provider}</h3>
                            <p className="text-xl">{balances[provider]}</p>
                        </div>
                    ))}
                </div>

                <div className="flex gap-4">
                    <select
                        className="p-2 border border-gray-300 rounded"
                        value={selectedProvider}
                        onChange={(e) => setSelectedProvider(e.target.value)}
                    >
                        <option value="All">All Providers</option>
                        {Object.keys(balances).map(provider => (
                            <option key={provider} value={provider}>{provider}</option>
                        ))}
                    </select>

                    <select
                        className="p-2 border border-gray-300 rounded"
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                    >
                        <option value="All">All Dates</option>
                        {[...new Set(sampleTransactions.map(t => t.date))].map(date => (
                            <option key={date} value={date}>{date}</option>
                        ))}
                    </select>

                    <select
                        className="p-2 border border-gray-300 rounded"
                        value={selectedStatus}
                        onChange={(e) => setSelectedStatus(e.target.value)}
                    >
                        <option value="All">All Statuses</option>
                        {['Accepted', 'Pending', 'Failed'].map(status => (
                            <option key={status} value={status}>{status}</option>
                        ))}
                    </select>
                </div>
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

            <Dialog open={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true" />
                <div className="fixed inset-0 flex items-center justify-center p-4">
                    <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm w-full">
                        <h3 className="text-lg font-semibold mb-4">New Transaction</h3>
                        <form>
                            <div className="mb-4">
                                <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">Phone Number</label>
                                <input
                                    id="phoneNumber"
                                    type="text"
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                    placeholder="Enter your phone number"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="amount" className="block text-sm font-medium text-gray-700">Amount</label>
                                <input
                                    id="amount"
                                    type="text"
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                    placeholder="Enter amount of airtime"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="provider" className="block text-sm font-medium text-gray-700">Provider</label>
                                <input
                                    id="provider"
                                    type="text"
                                    value={currentProvider}
                                    readOnly
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm bg-gray-100 sm:text-sm"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="date" className="block text-sm font-medium text-gray-700">Date</label>
                                <input
                                    id="date"
                                    type="text"
                                    value={new Date().toLocaleDateString()}
                                    readOnly
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm bg-gray-100 sm:text-sm"
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
                            >
                                PURCHASE
                            </button>
                        </form>
                    </div>
                </div>
            </Dialog>
        </div>
    );
}
