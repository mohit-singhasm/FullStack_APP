import React, { useEffect, useState } from "react";
import { useAuth } from "../store/auth";
import { Link } from "react-router-dom";

const Admin_Services = () => {
  const { token } = useAuth();
  const [service, setService] = useState([]);
  const constLink = "https://full-stack-app-xi.vercel.app/api";

  // const { provider, price, service, description } = e;

  // Getting user data function

  const getServices = async () => {
    try {
      const response = await fetch(`${constLink}/data/service`, {
        method: "GET",
        headers: { Authorization: token },
      });
      const data = await response.json();
      if (response.ok) {
        console.log(data);
        setService(data.servicesAll);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deleteService = async (id) => {
    try {
      const response = await fetch(`${constLink}/data/service/delete/${id}`, {
        method: "DELETE",
        headers: { Authorization: token },
      });
      // console.log(response)
      const data = await response.json();
      if (response.ok) {
        getServices();
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getServices();
  }, []);

  return (
    <>
      <div className="relative overflow-x-auto py-8 px-8">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 shadow-md">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3">
                Provider
              </th>
              <th scope="col" className="px-6 py-3">
                Service
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                Description
              </th>
              <th scope="col" className="px-6 py-3">
                Update
              </th>
              <th scope="col" className="px-6 py-3">
                Delete
              </th>
            </tr>
          </thead>
          {service.map((e) => {
            // const { username, email, phone, _id } = user;
            const { _id, provider, price, service, description } = e;
            return (
              <tbody key={_id}>
                <tr className="bg-white border-b">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap capitalize"
                  >
                    {provider}
                  </th>
                  <td className="px-6 py-4">{service}</td>
                  <td className="px-6 py-4">₹ {price}</td>
                  <td className="px-6 py-4">{description}</td>
                  <td className="px-6 py-4">
                    <Link
                      className="bg-primary text-white px-6 py-2 rounded-full"
                      to={`/admin/service/${_id}/edit`}
                    >
                      Update
                    </Link>
                  </td>
                  <td className="px-6 py-4">
                    <button
                      className="bg-primary text-white px-6 py-2 rounded-full"
                      onClick={() => {
                        deleteService(_id);
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

export default Admin_Services;
