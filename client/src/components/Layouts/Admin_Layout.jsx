import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../store/auth";
import SideBar from "../SideBar/SideBar";

const Admin_Layout = () => {
  const { user, isLoading } = useAuth();

  console.log(isLoading);
  if (isLoading) {
    return <h1>Loading......</h1>;
  }

  if (!user.isAdmin) {
    return <Navigate to="/" />;
  }

  return (
    <>
      {/* <header className='admin-header'>
        <div className="container">
          <nav>
            <ul>
              <li>
                <FaUserTie />
                <NavLink to='/admin/users'>User</NavLink>
              </li>
              <li>
                <MdContactMail />
                <NavLink to='/admin/contacts'>Contacts</NavLink>
              </li>
              <li>
                <GrBusinessService />
                <NavLink to='/services'>Services</NavLink>
              </li>
              <li>
                <FaHome />
                <NavLink to='/'>Home</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header> */}
      <div className="flex w-full">
        {/* SideBar */}
        <SideBar />
        <div className="flex justify-center items-center w-full h-full">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Admin_Layout;
