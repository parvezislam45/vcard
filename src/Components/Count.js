import React from "react";
import CountUp from 'react-countup';
const Count = () => {
  return (
    <div>
      <div className=" mx-auto grid grid-cols-1 md:grid-cols-4 mt-28 px-10 gap-y-10 gap-10"data-aos="fade-up"  data-aos-duration="2000">
        <div className="stat place-items-center border-2 border-sky-500 bg-blue-900 rounded-xl">
          <div className="stat-figure text-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-8 h-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
          </div>
          <div className="stat-title text-white font-semibold">Downloads</div>
          <CountUp className="stat-value text-white" end={31} duration={15}></CountUp>
       
          <div className="stat-desc text-white font-semibold">Jan 1st - Feb 1st</div>
        </div>

        <div className="stat place-items-center border-2 border-sky-500 bg-blue-900 rounded-xl">
          <div className="stat-figure text-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-8 h-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
              ></path>
            </svg>
          </div>
          <div className="stat-title text-white font-semibold">New Users</div>
          <CountUp className="stat-value text-white" end={70} duration={15}></CountUp>
          <div className="stat-desc text-white font-semibold">↗︎ 400 (22%)</div>
        </div>

        <div className="stat place-items-center border-2 border-sky-500 bg-blue-900 rounded-xl">
          <div className="stat-figure text-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-8 h-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
              ></path>
            </svg>
          </div>
          <div className="stat-title text-white font-semibold">New Registers</div>
          <CountUp className="stat-value text-white" end={45} duration={15}></CountUp>
          <div className="stat-desc text-white">↘︎ 90 (14%)</div>
        </div>
        <div className="stat place-items-center border-2 border-sky-500 bg-blue-900 rounded-xl">
          <div className="stat-figure text-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-8 h-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
              ></path>
            </svg>
          </div>
          <div className="stat-title text-white font-semibold">New Registers</div>
          <CountUp className="stat-value text-white" end={40} duration={15}></CountUp>
          <div className="stat-desc text-white">↘︎ 90 (14%)</div>
        </div>
       
      </div>
    </div>
  );
};

export default Count;
