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
    Safaricom: "Ksh100.00",
    Airtel: "Ksh50.00",
    Telkom: "Ksh75.00",
};

const sampleTransactions = [
    {
        id: generateRandomId(8),
        method: "MPESA",
        mobileNumber: "0701234567",
        amount: "KSh 50.00",
        date: "2024-08-06",
        status: "Accepted",
        provider: "Safaricom",
    },
    {
        id: generateRandomId(8),
        method: "Airtel",
        mobileNumber: "0785345678",
        amount: "KSh 30.00",
        date: "2024-08-05",
        status: "Pending",
        provider: "Airtel",
    },
    {
        id: generateRandomId(8),
        method: "T KASH",
        mobileNumber: "0753456789",
        amount: "KSh 20.00",
        date: "2024-08-04",
        status: "Failed",
        provider: "Telkom",
    },
    {
        id: generateRandomId(8),
        method: "MPESA",
        mobileNumber: "0720234567",
        amount: "KSh 80.00",
        date: "2024-08-06",
        status: "Failed",
        provider: "Safaricom",
    },
    {
        id: generateRandomId(8),
        method: "Airtel",
        mobileNumber: "0791234567",
        amount: "KSh 575.00",
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
        <div className="flex-1 bg-white shadow-md rounded-lg p-4 sm:p-6 lg:p-8">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-4 text-green-600">Payments</h2>
            
            <div className="flex flex-col">
                <div className="flex flex-wrap gap-4 mb-4">
                    {Object.keys(balances).map(provider => (
                        <div 
                            key={provider}
                            className={`cursor-pointer p-4 sm:p-6 rounded-lg ${selectedProvider === provider ? 'bg-gray-200' : 'bg-gray-100'} shadow-md flex-1 min-w-[200px]`}
                            onClick={() => handleProviderClick(provider)}
                        >
                            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold">{provider}</h3>
                            <p className="text-2xl sm:text-3xl md:text-4xl">{balances[provider]}</p>
                        </div>
                    ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4 mb-6">
                    <select
                        className="p-2 border border-gray-300 rounded-md w-full sm:w-1/4 text-sm sm:text-base"
                        value={selectedProvider}
                        onChange={(e) => setSelectedProvider(e.target.value)}
                    >
                        <option value="All">All</option>
                        {Object.keys(balances).map(provider => (
                            <option key={provider} value={provider}>{provider}</option>
                        ))}
                    </select>

                    <select
                        className="p-2 border border-gray-300 rounded-md w-full sm:w-1/4 text-sm sm:text-base"
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                    >
                        <option value="All">All</option>
                        {[...new Set(sampleTransactions.map(t => t.date))].map(date => (
                            <option key={date} value={date}>{date}</option>
                        ))}
                    </select>

                    <select
                        className="p-2 border border-gray-300 rounded-md w-full sm:w-1/4 text-sm sm:text-base"
                        value={selectedStatus}
                        onChange={(e) => setSelectedStatus(e.target.value)}
                    >
                        <option value="All">All</option>
                        {['Accepted', 'Pending', 'Failed'].map(status => (
                            <option key={status} value={status}>{status}</option>
                        ))}
                    </select>
                </div>
            </div>

            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200">
                    <thead>
                        <tr className="border-b bg-gray-100">
                            <th className="px-2 py-1 sm:px-4 sm:py-2 text-left text-gray-700 text-sm sm:text-base">Transaction ID</th>
                            <th className="px-2 py-1 sm:px-4 sm:py-2 text-left text-gray-700 text-sm sm:text-base">Payment Method</th>
                            <th className="px-2 py-1 sm:px-4 sm:py-2 text-left text-gray-700 text-sm sm:text-base">Mobile Number</th>
                            <th className="px-2 py-1 sm:px-4 sm:py-2 text-left text-gray-700 text-sm sm:text-base">Amount</th>
                            <th className="px-2 py-1 sm:px-4 sm:py-2 text-left text-gray-700 text-sm sm:text-base">Date</th>
                            <th className="px-2 py-1 sm:px-4 sm:py-2 text-left text-gray-700 text-sm sm:text-base">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredTransactions.map((transaction) => (
                            <tr key={transaction.id} className="border-b">
                                <td className="px-2 py-1 sm:px-4 sm:py-2 text-gray-700 text-sm sm:text-base">{transaction.id}</td>
                                <td className="px-2 py-1 sm:px-4 sm:py-2 text-gray-700 text-sm sm:text-base">{transaction.method}</td>
                                <td className="px-2 py-1 sm:px-4 sm:py-2 text-gray-700 text-sm sm:text-base">{transaction.mobileNumber}</td>
                                <td className="px-2 py-1 sm:px-4 sm:py-2 text-gray-700 text-sm sm:text-base">{transaction.amount}</td>
                                <td className="px-2 py-1 sm:px-4 sm:py-2 text-gray-700 text-sm sm:text-base">{transaction.date}</td>
                                <td className={`px-2 py-1 sm:px-4 sm:py-2 ${getStatusClass(transaction.status)} text-sm sm:text-base`}>
                                    {transaction.status}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <Dialog open={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true" />
                <div className="fixed inset-0 flex items-center justify-center p-4">
                    <div className="bg-white rounded-lg shadow-lg max-w-sm w-full p-6">
                        <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">Initiate Transaction</Dialog.Title>
                        <form className="mt-2">
                            <div className="mb-4">
                                <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">Phone Number</label>
                                <input
                                    type="text"
                                    id="phoneNumber"
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                    placeholder="Enter phone number"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="amount" className="block text-sm font-medium text-gray-700">Amount</label>
                                <input
                                    type="text"
                                    id="amount"
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                    placeholder="Enter amount"
                                />
                            </div>
                            <div className="flex gap-4">
                                <button
                                    type="button"
                                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                    onClick={() => setIsModalOpen(false)}
                                >
                                    Submit
                                </button>
                                <button
                                    type="button"
                                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-gray-500 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                                    onClick={() => setIsModalOpen(false)}
                                >
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </Dialog>
        </div>
    );
}
