import { ReactChildren, ReactNode } from "react";
import { Sidebar } from "@/components/admin";

interface AdminLayoutProps {
  children: ReactChildren | ReactNode;
}
const AdminLayout = (props: AdminLayoutProps) => {
  return (
    <div className="bg-blue-800 min-h-screen">
      <div className="grid grid-cols-12">
        <div className="col-span-2">
          <Sidebar />
        </div>
        <div className="col-span-10 bg-white px-5 min-h-screen">
          {props.children}
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
