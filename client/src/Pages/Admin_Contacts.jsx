import React, { useEffect, useState } from "react";
import { useAuth } from "../store/auth";

const Admin_Contacts = () => {
  const { token } = useAuth();
  // console.log(token)
  const [contacts, setContacts] = useState([]);

  const constLink = "https://full-stack-app-xi.vercel.app/api";

  // Getting all users

  const getAllContactData = async () => {
    try {
      const response = await fetch(`${constLink}/form/contacts`, {
        method: "GET",
        headers: { Authorization: token },
      });
      const data = await response.json();
      if (response.ok) {
        setContacts(data.allContacts);
        // console.log(data.allContacts)
      }
    } catch (error) {
      console.log(error);
    }
  };

  // deleting the users of given id
  const deleteUser = async (id) => {
    try {
      const response = await fetch(`${constLink}/admin/contacts/delete/${id}`, {
        method: "DELETE",
        headers: { Authorization: token },
      });
      // console.log(response)
      const data = await response.json();
      if (response.ok) {
        console.log(data);
        getAllContactData();
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllContactData();
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
          {contacts.map((contact) => {
            const { username, email, message, _id } = contact
            return (<div key={_id} className="table-row">
              <div className="table-cell">{username}</div>
              <div className="table-cell">{email}</div>
              <div className="table-cell">{message}</div>
              <div className="table-cell"><button onClick={() => { deleteUser(_id) }}>Delete</button></div>
            </div>)
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
                Message
              </th>
              {/* <th scope="col" className="px-6 py-3">
                Update
              </th> */}
              <th scope="col" className="px-6 py-3">
                Delete
              </th>
            </tr>
          </thead>
          {contacts.map((contact) => {
            const { username, email, message, _id } = contact;
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
                  <td className="px-6 py-4">{message}</td>
                  {/* <td className="px-6 py-4">
                    <Link
                      className="bg-primary text-white px-6 py-2 rounded-full"
                      to={`/admin/contacts/${_id}/edit`}
                    >
                      Update
                    </Link>
                  </td> */}
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
        </table>
      </div>
    </>
  );
};

export default Admin_Contacts;
