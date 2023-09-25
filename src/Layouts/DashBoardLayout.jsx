import { Link, Outlet } from 'react-router-dom';

const DashBoardLayout = () => {
  return (
    <div className="flex">
      <div className="w-[20%] bg-red-300">
        <ul>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/dashboard/profile">Profile</Link>
          </li>
          <li>
            <Link to="/dashboard/editprofile">Profile</Link>
          </li>
        </ul>
      </div>
      <div className="w-[80%]">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default DashBoardLayout;
