import React from "react";

const Banner = () => {
  return (
    <div className="container w-1320 mx-auto">
      <div class=" flex items-center  overflow-hidden">
        <div class="w-full rounded bg-white  text-gray-800 relative md:text-left px-16">
          <div class="md:flex -mt-32 items-center">
            <div
              class=" md:w-2/5 -mt-20"
              data-aos="fade-right"
              data-aos-duration="2000"
            >
              <div class="">
                <p class="text-md text-3xl font-medium">
                  SHARE YOUR CARD WITH A TAP
                </p>
                <h1 class="font-bold text-7xl mt-7">vCard Gen</h1>
                <h1 class="font-bold text-7xl">NFC Business Cards</h1>
                <p class="text-4xl mt-10 font-normal">
                  With <span className="font-bold text-4xl">vCard Gen,</span>{" "}
                  you can turn your Traditional business
                  <br /> card into a Smart NFC Digital Business Card in seconds
                </p>
              </div>
              <div>
                <div class="flex mt-32 justify-evenly items-start">
                  <button
                    type="button"
                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold rounded-full text-3xl px-12 py-6 text-center inline-flex items-center"
                  >
                    Choose plan
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      class="bi bi-arrow-right-circle w-16 h-16 ml-5 -mr-5"
                      viewBox="0 0 16 16"
                    >
                      {" "}
                      <path
                        fill-rule="evenodd"
                        d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"
                      />{" "}
                    </svg>
                  </button>
                  <button
                    type="button"
                    class=" bg-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-lg text-4xl text-black px-5 py-3 text-center inline-flex items-center -mt-6"
                  >
                    <img
                      className="w-36 h-36 mr-10"
                      src="https://brands.home-assistant.io/_/media_player/logo.png"
                      alt=""
                    />
                    VIDEO
                  </button>
                </div>
              </div>
            </div>
            <div
              class="w-2/4"
              data-aos="fade-left"
              data-aos-duration="2000"
            >
              <div class="relative">
                <img
                  src="https://vcardgen.com/wp-content/uploads/2023/05/iphone-multiple-screens.png"
                  class="w-full h-4/5 relative z-10"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
