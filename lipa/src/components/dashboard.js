
import Sidebar from "./sidebar";
import Profile from "./profile";
import Transactions from "./transactions";
import { format } from "date-fns";




export default function Dashboard() {
  const currentDateTime = format(new Date(), "PPpp");
    return (
      <main className="flex min-h-screen flex-col bg-gray-100 p-6">
            <div className="flex h-screen">
                <Sidebar />
                <div className="flex-1 flex flex-col p-6">
                    <Profile />
                    <div className="mb-6">
                        <h1 className="text-4xl font-bold mb-4">Welcome to Your Dashboard</h1>
                        <p className="text-lg mb-4">Here you can manage your account, view statistics, and more.</p>
                        <p className="text-md">Current Date & Time: {currentDateTime}</p>
                    </div>
                    <Transactions />
                </div>
            </div>
        </main>
    );
  };
  
  
  