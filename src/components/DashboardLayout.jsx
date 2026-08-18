import { Link, Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";

function DashboardLayout() {
  const applyActiveStyling = ({ isActive }) => ({
    backgroundColor: isActive ? "blue" : "white",
    padding: isActive ? "2px" : "0px",
    borderRadius: isActive ? "5px" : "0px",
    color: isActive ? 'white': 'black'
  });

  return (
    <>
      <h1> Dashboard Layout </h1>

      <nav className="flex flex-col">
        {/* <Link to='/dashboard'> Dashboard </Link>
                <Link to='/dashboard/billing'> BillingSection </Link>
                <Link to='/dashboard/settings'> SettingSection </Link> */}

        <NavLink
          to="/dashboard"
          end
          style={applyActiveStyling}
        >
          <span className="text-2xl"> Dashboard </span>
        </NavLink>
        <NavLink
          to="/dashboard/billing"
          style={applyActiveStyling}
        >
          
          <span className="text-2xl"> BillingSection </span>
        </NavLink>
        <NavLink
          to="/dashboard/settings"
          style={applyActiveStyling}
        >
          <span className="text-2xl"> SettingSection </span>
        </NavLink>
      </nav>

      <Outlet />
    </>
  );
}

export default DashboardLayout;
