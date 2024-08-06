
import Sidebar from "./sidebar";
import Profile from "./profile";
import Transactions from "./transactions";




export default function Dashboard() {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-6">
        <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Profile />
        <div>
        <h1 className="text-4xl font-bold mb-6">Welcome to Your Dashboard</h1>
        <p className="text-lg">Here you can manage your account, view statistics, and more.</p>
        </div>
        <div className="flex-1 p-6 bg-gray-100">
          <Transactions />
        </div>
      </div>
    </div>
      </main>
    );
  };
  
  
  