import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdSpaceDashboard } from "react-icons/md";
import { IoMdAlert, IoMdWallet } from "react-icons/io";
import {  AiFillSetting } from "react-icons/ai";
import { BsFillPersonVcardFill } from "react-icons/bs";
import { IoAlbums} from "react-icons/io5";
import { Link, Outlet } from "react-router-dom";
import {
  Area,
  CartesianGrid,
  ComposedChart,
  Legend,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
const AdminBoard = () => {
  const menus = [
    { name: "Dashboard", link: "/dashboard",icon: MdSpaceDashboard},
    { name: "Vcard", link: "/vcard", icon: BsFillPersonVcardFill},
    { name: "Enquiries", link: "/enquiries", icon: IoMdAlert},
    { name: "Appointment", link: "/appointment", icon: IoAlbums},
    { name: "Settings", link: "/setting", icon: AiFillSetting},
    { name: "Affiliations", link: "/affiliations", icon: IoMdWallet},
  ];
  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
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
        <div className=" max-w-7xl">
          DashBoard
          <Outlet></Outlet>
          <div class="grid lg:grid-cols-4 gap-20 gap-y-14 mt-20">
            <div className="card w-80 rounded-xl bg-blue-500 text-neutral-content">
              <div className="card-body">
                <div className="flex gap-10 items-center">
                  <img
                    className="w-20"
                    src="https://i.postimg.cc/fT7HqJMZ/Screenshot-2023-07-09-221010.png"
                    alt=""
                  />
                  <div>
                    <h1 className="text-5xl font-bold text-white text-end">
                      1
                    </h1>
                    <h1 className="text-lg mt-3 font-normal text-white text-end">
                      Total Active VCards
                    </h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="card w-80 rounded-xl bg-green-500 text-neutral-content">
              <div className="card-body">
                <div className="flex gap-10 items-center">
                  <img
                    className="w-20"
                    src="https://i.postimg.cc/G2JrmbkC/Screenshot-2023-07-09-221028.png"
                    alt=""
                  />
                  <div>
                    <h1 className="text-5xl font-bold text-white text-end">
                      0
                    </h1>
                    <h1 className="text-lg mt-3 font-normal text-white text-end">
                      Total DeActive VCards
                    </h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="card w-80 rounded-xl bg-sky-500 text-neutral-content">
              <div className="card-body">
                <div className="flex gap-10 items-center">
                  <img
                    className="w-20"
                    src="https://i.postimg.cc/LsWvgP3k/Screenshot-2023-07-09-221048.png"
                    alt=""
                  />
                  <div>
                    <h1 className="text-5xl font-bold text-white text-end">
                      0
                    </h1>
                    <h1 className="text-lg mt-3 font-normal text-white text-end">
                      Today Enquiries
                    </h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="card w-80 rounded-xl bg-yellow-500 text-neutral-content">
              <div className="card-body">
                <div className="flex gap-10 items-center">
                  <img
                    className="w-20"
                    src="https://i.postimg.cc/yYTPXtT8/Screenshot-2023-07-09-221110.png"
                    alt=""
                  />
                  <div>
                    <h1 className="text-5xl font-bold text-white text-end">
                      0
                    </h1>
                    <h1 className="text-lg mt-3 font-normal text-white text-end">
                      Today Appointments
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <h1 className="mt-20 text-2xl font-semibold text-black">
            vCard Analytic
          </h1>
          <div className="mt-28" style={{ width: "100%", height: 300 }}>
            <ResponsiveContainer>
              <ComposedChart
                width={500}
                height={400}
                data={data}
                margin={{
                  top: 20,
                  right: 20,
                  bottom: 20,
                  left: 20,
                }}
              >
                <CartesianGrid stroke="#f5f5f5" />
                <XAxis dataKey="name" scale="band" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Area
                  type="monotone"
                  dataKey="amt"
                  fill="#8884d8"
                  stroke="#8884d8"
                />

                <Line type="monotone" dataKey="uv" stroke="#ff7300" />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
          <h1 className="mt-20 text-2xl font-semibold text-black">
            Today Appointment
          </h1>
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th className="text-center text-lg text-black font-semibold">
                    vCard Name
                  </th>
                  <th className="text-center text-lg text-black font-semibold">
                    Name
                  </th>
                  <th className="text-center text-lg text-black font-semibold">
                    Job
                  </th>
                  <th className="text-center text-lg text-black font-semibold">
                    Favorite Color
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th></th>
                  <td></td>
                  <td className="text-center text-lg text-black font-semibold">
                    No Data Available
                  </td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
          <footer className="footer footer-start p-4">
            <div>
              <p className="text-black font-normal text-lg">
                All right reserved  © 2023 vCard Gen 
              </p>
            </div>
          </footer>
        </div>
      </section>
    </div>
  );
};

export default AdminBoard;
