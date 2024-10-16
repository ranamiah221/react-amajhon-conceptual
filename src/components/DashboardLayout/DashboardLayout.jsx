import { NavLink, Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="grid grid-cols-5 h-96">
      <div className="col-span-1 shadow-lg h-72 p-5 ">
        <ul className="text-xl font-bold ">
        <li>
            <NavLink
              to="/dashboard/dashboard"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "bg-green-500" : ""
              }
            >
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/statistics"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "bg-green-500 " : ""
              }
            >
              Statistics
            </NavLink>
          </li>
        </ul>
      </div>

           {/* outlet */}
           <div className="p-5">
            <Outlet></Outlet>
           </div>
    </div>
  );
};

export default DashboardLayout;
