import Sidebar from "@/components/Sidebar";
import { Outlet } from "react-router-dom";

const Dash = () => {
  return (
    <div className="max-md:px-4 max-md:py-3">
      <Sidebar />
      <div className="ml-[20%] max-md:m-0">
        {/* <DashHeader /> */}
        <Outlet />
      </div>
    </div>
  );
};

export default Dash;