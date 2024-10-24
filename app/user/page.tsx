import UserTable from "@/components/user-table";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Users",
};

const UserPage = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="max-w-screen mx-auto py-0">
        <h1 className="text-2xl font-bold">User list</h1>
        <UserTable />
      </div>
    </div>
  );
};

export default UserPage;
