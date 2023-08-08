import React, { useState } from "react";
import { AiFillSetting } from "react-icons/ai";
import { BsFillPersonVcardFill } from "react-icons/bs";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoMdAlert, IoMdWallet } from "react-icons/io";
import { IoAlbums } from "react-icons/io5";
import { MdSpaceDashboard } from "react-icons/md";
import { Link } from "react-router-dom";

const Enquiries = () => {
  const menus = [
    { name: "Dashboard", link: "/dashboard", icon: MdSpaceDashboard },
    { name: "Vcard", link: "/vcard", icon: BsFillPersonVcardFill },
    { name: "Enquiries", link: "/enquiries", icon: IoMdAlert },
    { name: "Appointment", link: "/appointment", icon: IoAlbums },
    { name: "Settings", link: "/setting", icon: AiFillSetting },
    { name: "Affiliations", link: "/affiliations", icon: IoMdWallet },
  ];
  const [open, setOpen] = useState(true);
  return (
    <div>
      <section className="flex gap-10">
        <div
          className={`bg-white min-h-screen ${
            open ? "w-72" : "w-16"
          } duration-500 text-black px-4`}
        >
          <div className="py-3 flex justify-end">
            <HiMenuAlt3
              size={26}
              className="cursor-pointer"
              onClick={() => setOpen(!open)}
            />
          </div>

          <div className="mt-4 flex flex-col gap-4 relative">
            {menus?.map((menu, i) => (
              <Link
                to={menu?.link}
                key={i}
                className={` ${
                  menu?.margin && ""
                } group flex items-center text-lg  gap-3.5 font-medium p-2 hover:bg-yellow-600 rounded-md`}
              >
                <div>{React.createElement(menu?.icon, { size: "28" })}</div>
                <h2
                  style={{
                    transitionDelay: `${i + 3}00ms`,
                  }}
                  className={`whitespace-pre duration-500 ${
                    !open && "opacity-0 translate-x-28 overflow-hidden"
                  }`}
                >
                  {menu?.name}
                </h2>
                <h2
                  className={`${
                    open && "hidden"
                  } absolute left-48 bg-white text-xl font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
                >
                  {menu?.name}
                </h2>
              </Link>
            ))}
          </div>
        </div>
        <div className="w-full px-10">Enquiries
        <div>
          <div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-40 w-full">
            <table class="w-full text-md text-left text-black">
              <thead class="text-md text-gray-700 uppercase bg-gray-100">
                <tr>
                  <th scope="col" class="">
                    VCard Name
                  </th>
                  <th scope="col" class="px-8 py-3">
                    Name
                  </th>
                  <th scope="col" class="px-8 py-3">
                    Email
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Phone
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Creation
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr class="bg-white border-b hover:bg-gray-50">
                 
                  <th
                    scope="row"
                    class="px-3 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                   
                  </th>
                  <td class=""></td>
                  <td class="px-6 py-4"></td>
                  <td class="px-6 py-4">No Data Available</td>
                  <td class="px-6 py-4">
                    
                  </td>
                  <td class="px-6 py-4"></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        </div>
       
      </section>
    </div>
  );
};

export default Enquiries;
