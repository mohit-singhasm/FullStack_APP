import React, { useEffect, useState } from "react";
import { useAuth } from "../store/auth";
import { Link } from "react-router-dom";

const Admin_Users = () => {
  const { token } = useAuth();
  const [users, setUsers] = useState([]);

  // Getting user data function

  const getAllUsersData = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/admin/users", {
        method: "GET",
        headers: { Authorization: token },
      });
      const data = await response.json();
      if (response.ok) {
        setUsers(data.allUsers);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deleteUser = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:3000/api/admin/users/delete/${id}`,
        {
          method: "DELETE",
          headers: { Authorization: token },
        }
      );
      // console.log(response)
      const data = await response.json();
      if (response.ok) {
        console.log(data);
        getAllUsersData();
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllUsersData();
  }, []);

  return (
    <>
      {/* <div className="table-container">
        <header className="table-header">
          <div className="column-header">Name</div>
          <div className="column-header">Email</div>
          <div className="column-header">Phone</div>
          <div className="column-header">Update</div>
          <div className="column-header">Delete</div>
        </header>
        <div className="table-body">
          {users.map((user) => {
            const { username, email, phone, _id } = user;
            return (
              <div key={_id} className="table-row">
                <div className="table-cell">{username}</div>
                <div className="table-cell">{email}</div>
                <div className="table-cell">{phone}</div>
                <div className="table-cell">
                  <Link to={`/admin/users/${_id}/edit`}>Edit</Link>
                </div>
                <div className="table-cell">
                  <button
                    onClick={() => {
                      deleteUser(_id);
                    }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div> */}

      <div className="relative overflow-x-auto py-8 px-8">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 shadow-md">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Phone
              </th>
              <th scope="col" className="px-6 py-3">
                Update
              </th>
              <th scope="col" className="px-6 py-3">
                Delete
              </th>
            </tr>
          </thead>
          {users.map((user) => {
            const { username, email, phone, _id } = user;
            return (
              <tbody key={_id}>
                <tr className="bg-white border-b">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap capitalize"
                  >
                    {username}
                  </th>
                  <td className="px-6 py-4">{email}</td>
                  <td className="px-6 py-4">{phone}</td>
                  <td className="px-6 py-4">
                    <Link
                      className="bg-primary text-white px-6 py-2 rounded-full"
                      to={`/admin/users/${_id}/edit`}
                    >
                      Update
                    </Link>
                  </td>
                  <td className="px-6 py-4">
                    <button
                      className="bg-primary text-white px-6 py-2 rounded-full"
                      onClick={() => {
                        deleteUser(_id);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            );
          })}
          {/* <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Apple MacBook Pro 17"
              </th>
              <td className="px-6 py-4">Silver</td>
              <td className="px-6 py-4">Laptop</td>
              <td className="px-6 py-4">$2999</td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Microsoft Surface Pro
              </th>
              <td className="px-6 py-4">White</td>
              <td className="px-6 py-4">Laptop PC</td>
              <td className="px-6 py-4">$1999</td>
            </tr>
            <tr className="bg-white dark:bg-gray-800">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Magic Mouse 2
              </th>
              <td className="px-6 py-4">Black</td>
              <td className="px-6 py-4">Accessories</td>
              <td className="px-6 py-4">$99</td>
            </tr>
          </tbody> */}
        </table>
      </div>
    </>
  );
};

export default Admin_Users;
