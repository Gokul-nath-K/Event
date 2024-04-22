import React from "react";

const EventsTable = () => {
  return (
    <>
      <div className="relative overflow-x-auto grow shadow-md sm:rounded-lg mb-10">
        <table className="w-full text-sm text-left rtl:text-right">
          <caption className="py-5 px-6 text-lg font-semibold text-left rtl:text-right">
            Event info
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
                Category
              </th>
              <th scope="col" className="px-6 py-3">
                Date
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-6 py-3">
                Budget
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b ">
              <td className="px-6 py-4 font-medium ">01</td>
              <td className="px-6 py-4">Jenifer</td>

              <td className="px-6 py-4 ">Wedding</td>
              <td className="px-6 py-4 ">10-FEB-2024</td>
              <td className="px-6 py-4 ">Completed</td>
              <td className="px-6 py-4 ">7.5L</td>
            </tr>
            <tr className="bg-white border-b ">
              <td className="px-6 py-4 font-medium ">02</td>
              <td className="px-6 py-4">Arun</td>

              <td className="px-6 py-4 ">Aniversary</td>
              <td className="px-6 py-4 ">17-DEC-2023</td>
              <td className="px-6 py-4 ">Completed</td>
              <td className="px-6 py-4 ">2.5L</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default EventsTable;
