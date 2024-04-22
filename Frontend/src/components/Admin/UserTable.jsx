import React from "react";

import { userDetails } from "../../assets/Data/User";

const UserTable = () => {
  return (
    <>
      <div className="w-[100%]  flex flex-row justify-center pt-8 pb-10 ">
        <div className="shadow-md sm:rounded-lg w-[90%] border border-black">
          <table className="w-full text-sm text-left rtl:text-right ">
            <caption className="py-5 px-6 text-lg font-semibold text-left rtl:text-right border-b border-black mb-2">
              User info
            </caption>
            <thead className="">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Id
                </th>
                <th scope="col" className="px-6 py-3">
                  Name
                </th>
                <th scope="col" className="px-6 py-3">
                  E-mail
                </th>
                <th scope="col" className="px-6 py-3">
                  Phone
                </th>
                <th scope="col" className="px-6 py-3">
                  Role
                </th>
              </tr>
            </thead>
            <tbody>
              {
                userDetails && userDetails.map((user) => (
                  <>
                    <tr className="bg-white border-b hover:bg-gray-200 hover:border-gray-400" key={user.id}>
                      <td className="px-6 py-4 font-medium ">{user.id}</td>
                      <td className="px-6 py-4">{user.name}</td>
                      <td className="px-6 py-4 "> {user.email} </td>
                      <td className="px-6 py-4 "> {user.phone} </td>
                      <td className="px-6 py-4 "> {user.role} </td>
                    </tr>
                  </>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default UserTable;
