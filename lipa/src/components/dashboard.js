import Sidebar from "./sidebar";
import Profile from "./profile";
import Transactions from "./transactions";
import { format } from "date-fns";

export default function Dashboard() {
  const currentDateTime = format(new Date(), "PPpp");

  return (
    <main className="flex min-h-screen">
      <Sidebar className="w-1/4 bg-gray-800 text-white flex-shrink-0 h-screen" />
      <div className="flex-1 flex flex-col bg-gray-100 p-6">
        <Profile />
        <div className="mb-6">
          <p className="text-md">{currentDateTime}</p>
          <h1 className="text-4xl font-bold mb-4">Welcome to Your Dashboard</h1>
        </div>
        <div className="flex-1 overflow-y-auto">
          <Transactions />
        </div>
      </div>
    </main>
  );
}
