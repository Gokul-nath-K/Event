import React from 'react'
import { CiStar } from 'react-icons/ci'
import { inbox } from '../../assets/Data/Inbox'
import { FaStar } from 'react-icons/fa'

const Inbox = () => {
  return (
    <><div className='mx-10 w-full'>
        
        <table className="w-full text-sm text-left rtl:text-right text-black shadow-xl border border-gray-500 rounded-2xl ">
          <thead className="text-xs  uppercase   ">
        <tr>
          <th scope="col" className="p-4 py-4 px-4">
            <div className="flex items-center">
                {" "}
            </div>
          </th>
          <th scope="col" className="px-10 py-3 w-[30%] text-lg">
            Name
          </th>
          <th scope="col" className="px-6 py-3 row-span-3 text-lg">
            Message
          </th>
        
        </tr>
          </thead>
          <tbody>
            {
                inbox && inbox.map((ele) => (
                    <>
                    
                        <tr className="bg-white border-b " key={ele.id}>
                        <td className="w-4 p-4 pl-6">
                            <div className="flex items-center">
                             { ele.id % 3 === 0 || ele.id % 7 === 0 ? <CiStar size={25}/> : <FaStar size={25}/> } 
                            </div>
                        </td>
                        <th scope="row" className="flex items-center px-6 py-4  whitespace-nowrap">
                            <div className="ps-3 w-[30%] ">
                            <div className="text-base font-semibold"> { ele.name } </div>
                            <div className="font-normal text-black"> {ele.email} </div>
                            </div>
                        </th>
                        <td className="px-6 py-4 row-span-3">
                            { ele.msg } 
                        </td>
                        </tr>
                    </>
                ))
            }
           
          </tbody>
        </table>
    </div>

    </>
  )
}

export default Inbox