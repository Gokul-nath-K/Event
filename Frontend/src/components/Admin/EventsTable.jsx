import React from "react";
import { eventData } from "../../assets/Data/EventData";

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
            {
              eventData && eventData.map((ele) => (
                <>
                  <tr className="bg-white border-b " key={ele.id}>
                    <td className="px-6 py-4 font-medium ">{ele.id}</td>
                    <td className="px-6 py-4">{ele.name}</td>

                    <td className="px-6 py-4 ">{ele.category}</td>
                    <td className="px-6 py-4 ">{ele.date}</td>
                    <td className="px-6 py-4 ">{ele.status}</td>
                    <td className="px-6 py-4 ">{ele.budget}</td>
                  </tr>
                
                </>
              ))
            }
          </tbody>
        </table>
      </div>
    </>
  );
};

export default EventsTable;
