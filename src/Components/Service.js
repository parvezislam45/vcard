import React from "react";

const Service = () => {
  return (
    <div>
      {/* <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-7 mt-28 gap-y-10 px-16">
        <div className="mt-28">
          <div className="flex items-start gap-8">
            <div>
              <h1 className="text-black font-bold text-xl text-end">
                NFC Chip
              </h1>
              <p className="text-black font-normal text-md mt-2">
                Tap your card on a phone and share
                <br /> your contact details without contact.
              </p>
            </div>
            <button
              type="button"
              class="text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500 drop-shadow-2xl"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="currentColor"
                class="bi bi-clock-history w-8 h-8"
              >
                <title>ionicons-v5-l</title>
                <rect x="160" y="160" width="192" height="192" />
                <path d="M480,198V154H448V88a24,24,0,0,0-24-24H358V32H314V64H278V32H234V64H198V32H154V64H88A24,24,0,0,0,64,88v66H32v44H64v36H32v44H64v36H32v44H64v66a24,24,0,0,0,24,24h66v32h44V448h36v32h44V448h36v32h44V448h66a24,24,0,0,0,24-24V358h32V314H448V278h32V234H448V198ZM128,128H384V384H128Z" />
              </svg>
              <span class="sr-only">Icon description</span>
            </button>
          </div>
          <div className="flex items-start gap-8 mt-10">
            <div>
              <h1 className="text-black font-bold text-xl text-end">
                Plug & Play
              </h1>
              <p className="text-black font-normal text-md mt-2">
                For both sharing and
                <br /> receiving your contact
                <br />
                details, no app is needed.
              </p>
            </div>
            <button
              type="button"
              class="text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                class="bi bi-play w-8 h-8"
                viewBox="0 0 16 16"
              >
                {" "}
                <path d="M10.804 8 5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z" />{" "}
              </svg>
              <span class="sr-only">Icon description</span>
            </button>
          </div>
          <div className="flex items-start gap-8 mt-10">
            <div>
              <h1 className="text-black font-bold text-xl text-end">
                QR Codes
              </h1>
              <p className="text-black font-normal text-md mt-2">
                Open your camera and scan the QR
                <br />
                code for older phones.
              </p>
            </div>
            <button
              type="button"
              class="text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                class="bi bi-qr-code-scan w-8 h-8"
                viewBox="0 0 16 16"
              >
                {" "}
                <path d="M0 .5A.5.5 0 0 1 .5 0h3a.5.5 0 0 1 0 1H1v2.5a.5.5 0 0 1-1 0v-3Zm12 0a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0V1h-2.5a.5.5 0 0 1-.5-.5ZM.5 12a.5.5 0 0 1 .5.5V15h2.5a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5Zm15 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1 0-1H15v-2.5a.5.5 0 0 1 .5-.5ZM4 4h1v1H4V4Z" />{" "}
                <path d="M7 2H2v5h5V2ZM3 3h3v3H3V3Zm2 8H4v1h1v-1Z" />{" "}
                <path d="M7 9H2v5h5V9Zm-4 1h3v3H3v-3Zm8-6h1v1h-1V4Z" />{" "}
                <path d="M9 2h5v5H9V2Zm1 1v3h3V3h-3ZM8 8v2h1v1H8v1h2v-2h1v2h1v-1h2v-1h-3V8H8Zm2 2H9V9h1v1Zm4 2h-1v1h-2v1h3v-2Zm-4 2v-1H8v1h2Z" />{" "}
                <path d="M12 9h2V8h-2v1Z" />{" "}
              </svg>
              <span class="sr-only">Icon description</span>
            </button>
          </div>
        </div>
        <div>
          <img
            className="w-full h-full"
            src="https://vcardgen.com/wp-content/uploads/2023/05/iphone13pro.png"
            alt=""
          />
        </div>
        <div className="mt-28">
          <div className="flex items-start gap-8">
            <button
              type="button"
              class="text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                class="bi bi-clock-history w-8 h-8"
                viewBox="0 0 16 16"
              >
                {" "}
                <path d="M8.515 1.019A7 7 0 0 0 8 1V0a8 8 0 0 1 .589.022l-.074.997zm2.004.45a7.003 7.003 0 0 0-.985-.299l.219-.976c.383.086.76.2 1.126.342l-.36.933zm1.37.71a7.01 7.01 0 0 0-.439-.27l.493-.87a8.025 8.025 0 0 1 .979.654l-.615.789a6.996 6.996 0 0 0-.418-.302zm1.834 1.79a6.99 6.99 0 0 0-.653-.796l.724-.69c.27.285.52.59.747.91l-.818.576zm.744 1.352a7.08 7.08 0 0 0-.214-.468l.893-.45a7.976 7.976 0 0 1 .45 1.088l-.95.313a7.023 7.023 0 0 0-.179-.483zm.53 2.507a6.991 6.991 0 0 0-.1-1.025l.985-.17c.067.386.106.778.116 1.17l-1 .025zm-.131 1.538c.033-.17.06-.339.081-.51l.993.123a7.957 7.957 0 0 1-.23 1.155l-.964-.267c.046-.165.086-.332.12-.501zm-.952 2.379c.184-.29.346-.594.486-.908l.914.405c-.16.36-.345.706-.555 1.038l-.845-.535zm-.964 1.205c.122-.122.239-.248.35-.378l.758.653a8.073 8.073 0 0 1-.401.432l-.707-.707z" />{" "}
                <path d="M8 1a7 7 0 1 0 4.95 11.95l.707.707A8.001 8.001 0 1 1 8 0v1z" />{" "}
                <path d="M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5z" />{" "}
              </svg>
              <span class="sr-only">Icon description</span>
            </button>
            <div>
              <h1 className="text-black font-bold text-xl text-start">
                History and archive
              </h1>
              <p className="text-black font-normal text-md mt-2">
                View past activity to determine what
                <br />
                is working and what is not.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-8 mx-10 mt-10">
            <button
              type="button"
              class="text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                class="bi bi-clock-history w-8 h-8"
                viewBox="0 0 24 24"
              >
                {" "}
                <g>
                  {" "}
                  <path fill="none" d="M0 0h24v24H0z" />{" "}
                  <path d="M12 14v2a6 6 0 0 0-6 6H4a8 8 0 0 1 8-8zm0-1c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6zm0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm9 6h1v5h-8v-5h1v-1a3 3 0 0 1 6 0v1zm-2 0v-1a1 1 0 0 0-2 0v1h2z" />{" "}
                </g>{" "}
              </svg>
              <span class="sr-only">Icon description</span>
            </button>
            <div>
              <h1 className="text-black font-bold text-xl text-start">
                Admin Controls
              </h1>
              <p className="text-black font-normal text-md mt-2">
                Ensure uniform data, and
                <br />
                prevent employees from
                <br />
                modifying fields like title and
                <br />
                email address.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-8 mt-8">
            <button
              type="button"
              class="text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                class="bi bi-clock-history w-8 h-8"
                viewBox="0 0 24 24"
              >
                <path d="M19,3h-4.18C14.4,1.84,13.3,1,12,1S9.6,1.84,9.18,3H5C4.86,3,4.73,3.01,4.6,3.04C4.21,3.12,3.86,3.32,3.59,3.59 c-0.18,0.18-0.33,0.4-0.43,0.64C3.06,4.46,3,4.72,3,5v14c0,0.27,0.06,0.54,0.16,0.78c0.1,0.24,0.25,0.45,0.43,0.64 c0.27,0.27,0.62,0.47,1.01,0.55C4.73,20.99,4.86,21,5,21h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3z M11,14.17l-1.41,1.42L6,12 l3.59-3.59L11,9.83L8.83,12L11,14.17z M12,4.25c-0.41,0-0.75-0.34-0.75-0.75S11.59,2.75,12,2.75s0.75,0.34,0.75,0.75 S12.41,4.25,12,4.25z M14.41,15.59L13,14.17L15.17,12L13,9.83l1.41-1.42L18,12L14.41,15.59z" />
              </svg>
              <span class="sr-only">Icon description</span>
            </button>
            <div>
              <h1 className="text-black font-bold text-xl text-start">
                CRM Integration
              </h1>
              <p className="text-black font-normal text-md mt-2">
                Send leads and contacts
                <br />
                automatically to your CRM. Follow up
                <br />
                faster, grow your email list and close
                <br />
                more deals.
              </p>
            </div>
          </div>
        </div>
      </div> */}

      <div class="">
        <section class="">
          <h2 class=" text-6xl font-bold text-center mt-20">
            Why is it so great?
          </h2>
          {/* <div class="grid lg:grid-cols-3 gap-20 gap-y-20 mx-auto">
            <div class=" w-full">
              <div class="bg-white shadow-xl rounded-lg mb-6 tracking-wide">
                <div class="md:flex-shrink-0">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQz97zKQcn1aqsUS1AyuEXDIBfCsxsOQosqg&usqp=CAU"
                    alt="mountains"
                    class="w-32 h-32 mx-10 rounded-full"
                  />
                </div>
                <div class="px-4 py-2">
                  <h2 class="font-bold text-3xl text-gray-800 tracking-normal">
                    NFC Chip
                  </h2>
                  <p class="text-2xl text-gray-700 px-2 mr-1 mt-5">
                    Tap your card on a phone and share your contact details
                    without contact.
                  </p>
                  <a
                    href="#"
                    class="inline-flex text-2xl  items-center text-blue-600 hover:underline mt-3"
                  >
                    See our guideline
                    <svg
                      class="w-5 h-5 ml-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path>
                      <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div class=" w-full">
              <div class="bg-white shadow-xl rounded-lg mb-6 tracking-wide">
                <div class="md:flex-shrink-0">
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/5261/5261093.png"
                    alt="mountains"
                    class="w-32 h-32 mx-10 rounded-full"
                  />
                </div>
                <div class="px-4 py-2">
                  <h2 class="font-bold text-3xl text-gray-800 tracking-normal">
                  Plug & Play

                  </h2>
                  <p class="text-2xl text-gray-700 px-2 mr-1 mt-5">
                  For both sharing and receiving your contact details, no app is needed
                  </p>
                  <a
                    href="#"
                    class="inline-flex text-2xl  items-center text-blue-600 hover:underline mt-3"
                  >
                    See our guideline
                    <svg
                      class="w-5 h-5 ml-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path>
                      <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div class=" w-full">
              <div class="bg-white shadow-xl rounded-lg mb-6 tracking-wide">
                <div class="md:flex-shrink-0">
                  <img
                    src="https://codepope.dev/images/2022/07-25/firstqrcode.png"
                    alt="mountains"
                    class="w-32 h-32 mx-10 rounded-full"
                  />
                </div>
                <div class="px-4 py-2">
                  <h2 class="font-bold text-3xl text-gray-800 tracking-normal">
                  QR Codes
                  </h2>
                  <p class="text-2xl text-gray-700 px-2 mr-1 mt-5">
                  Open your camera and scan the QR code for older phones.
                  </p>
                  <a
                    href="#"
                    class="inline-flex text-2xl  items-center text-blue-600 hover:underline mt-3"
                  >
                    See our guideline
                    <svg
                      class="w-5 h-5 ml-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path>
                      <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div class=" w-full mt-10">
              <div class="bg-white shadow-2xl rounded-lg mb-6 tracking-wide">
                <div class="md:flex-shrink-0">
                  <img
                    src="https://cdn.iconscout.com/icon/premium/png-256-thumb/history-record-3004580-2504909.png?f=webp"
                    alt="mountains"
                    class="w-32 h-32 mx-10 rounded-full"
                  />
                </div>
                <div class="px-4 py-2">
                  <h2 class="font-bold text-3xl text-gray-800 tracking-normal">
                  History and archive
                  </h2>
                  <p class="text-2xl text-gray-700 px-2 mr-1 mt-5">
                  View past activity to determine what is working and what is not.
                  </p>
                  <a
                    href="#"
                    class="inline-flex text-2xl  items-center text-blue-600 hover:underline mt-3"
                  >
                    See our guideline
                    <svg
                      class="w-5 h-5 ml-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path>
                      <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div class=" w-full mt-10">
              <div class="bg-white shadow-2xl rounded-lg mb-6 tracking-wide">
                <div class="md:flex-shrink-0">
                  <img
                    src="https://examinward.unipune.ac.in/godown/images/admin.png"
                    alt="mountains"
                    class="w-32 h-32 mx-10 rounded-full"
                  />
                </div>
                <div class="px-4 py-2">
                  <h2 class="font-bold text-3xl text-gray-800 tracking-normal">
                  Admin Controls
                  </h2>
                  <p class="text-2xl text-gray-700 px-2 mr-1 mt-5">
                  Ensure uniform data, and prevent employees from modifying fields like title and email address.
                  </p>
                  <a
                    href="#"
                    class="inline-flex text-2xl  items-center text-blue-600 hover:underline mt-3"
                  >
                    See our guideline
                    <svg
                      class="w-5 h-5 ml-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path>
                      <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div class=" w-full mt-10">
              <div class="bg-white shadow-2xl rounded-lg mb-6 tracking-wide">
                <div class="md:flex-shrink-0">
                  <img
                    src="https://icrm.groupfio.com/wp-content/uploads/2023/04/Integration-with-iCRM.png"
                    alt="mountains"
                    class="w-32 h-32 mx-10 rounded-full"
                  />
                </div>
                <div class="px-4 py-2">
                  <h2 class="font-bold text-3xl text-gray-800 tracking-normal">
                  CRM Integration
                  </h2>
                  <p class="text-2xl text-gray-700 px-2 mr-1 mt-5">
                  Send leads and contacts automatically to your CRM. Follow up faster, grow your email list.
                  </p>
                  <a
                    href="#"
                    class="inline-flex text-2xl  items-center text-blue-600 hover:underline mt-3"
                  >
                    See our guideline
                    <svg
                      class="w-5 h-5 ml-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path>
                      <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          
          </div> */}
          <div class="grid grid-cols-1 gap-8 mt-20 xl:mt-28 md:grid-cols-3 xl:grid-cols-3 px-20">
            <div class="px-12 py-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-blue-600">
              <div class="flex flex-col sm:-mx-4 sm:flex-row">
                <img
                  class="flex-shrink-0 object-cover w-28 h-28 rounded-full sm:mx-4 ring-4 ring-gray-300 mr-1"
                  src="https://64.media.tumblr.com/f9cdd7f7e01de32b08525e12a3f8c4d7/tumblr_oc6m5xG3NW1txeruoo2_r1_500.gif"
                  alt=""
                />

                <div class="mt-2 sm:mx-4 sm:mt-0">
                  <h1 class="text-xl font-bold text-gray-900 capitalize md:text-4xl group-hover:text-white">
                    {" "}
                    NFC Chip
                  </h1>
                  <p class=" text-center text-black  text-2xl group-hover:text-gray-300 mt-4">
                    {" "}
                    Tap your card on a phone and share
                    <br /> your contact details without contact.
                  </p>
                </div>
              </div>
            </div>
            <div class="px-12 py-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-blue-600">
              <div class="flex flex-col sm:-mx-4 sm:flex-row">
                <img
                  class="flex-shrink-0 object-cover w-28 h-28 rounded-full sm:mx-4 ring-4 ring-gray-300 mr-1"
                  src="https://storage.gra.cloud.ovh.net/v1/AUTH_a9d76494089446b789523aa8bdb286f4/wikercdn/img/actualite/16w398mgr068q0gx/scanner-qr-code.gif"
                  alt=""
                />

                <div class="mt-2 sm:mx-4 sm:mt-0">
                  <h1 class="text-xl font-bold text-gray-900 capitalize md:text-4xl group-hover:text-white">
                    {" "}
                    QR Codes
                  </h1>
                  <p class=" text-start text-black  text-2xl group-hover:text-gray-300 mt-4">
                    Open your camera and scan the QR code for older phones. Tap
                    your card on a phone and share your contact details without
                    contact.
                  </p>
                </div>
              </div>
            </div>
            <div class="px-12 py-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-blue-600">
              <div class="flex flex-col sm:-mx-4 sm:flex-row">
                <img
                  class="flex-shrink-0 object-cover w-28 h-28 rounded-full sm:mx-4 ring-4 ring-gray-300 mr-1"
                  src="https://i.gifer.com/TjbP.gif"
                  alt=""
                />

                <div class="mt-2 sm:mx-4 sm:mt-0">
                  <h1 class="text-xl font-bold text-gray-900 capitalize md:text-4xl group-hover:text-white">
                    {" "}
                    Plug & Play
                  </h1>
                  <p class=" text-start text-black  text-2xl group-hover:text-gray-300 mt-4">
                    For both sharing and receiving your contact details, no app
                    is needed.
                  </p>
                </div>
              </div>
            </div>
            <div class="px-12 py-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-blue-600">
              <div class="flex flex-col sm:-mx-4 sm:flex-row">
                <img
                  class="flex-shrink-0 object-cover w-28 h-28 rounded-full sm:mx-4 ring-4 ring-gray-300 mr-1"
                  src="https://cdn.dribbble.com/users/120400/screenshots/2198888/136-mail-downloadarchive.gif"
                  alt=""
                />

                <div class="mt-2 sm:mx-4 sm:mt-0">
                  <h1 class="text-xl font-bold text-gray-900 capitalize md:text-4xl group-hover:text-white">
                    {" "}
                    History and archive
                  </h1>
                  <p class=" text-start text-black  text-2xl group-hover:text-gray-300 mt-4">
                    {" "}
                    Tap your card on a phone and share your contact details
                    without contact.
                  </p>
                </div>
              </div>
            </div>
            <div class="px-12 py-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-blue-600">
              <div class="flex flex-col sm:-mx-4 sm:flex-row">
                <img
                  class="flex-shrink-0 object-cover w-28 h-28 rounded-full sm:mx-4 ring-4 ring-gray-300 mr-1"
                  src="https://media.tenor.com/GGgh6eiqcwAAAAAd/security-catalyst.gif"
                  alt=""
                />

                <div class="mt-2 sm:mx-4 sm:mt-0">
                  <h1 class="text-xl font-bold text-gray-900 capitalize md:text-4xl group-hover:text-white">
                    {" "}
                    Admin Controls
                  </h1>
                  <p class=" text-start text-black  text-2xl group-hover:text-gray-300 mt-4">
                    {" "}
                    Ensure uniform data, and prevent employees from modifying
                    fields like title and email address.
                  </p>
                </div>
              </div>
            </div>
            <div class="px-12 py-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-blue-600">
              <div class="flex flex-col sm:-mx-4 sm:flex-row">
                <img
                  class="flex-shrink-0 object-cover w-28 h-28 rounded-full sm:mx-4 ring-4 ring-gray-300 mr-1"
                  src="https://visme.co/blog/wp-content/uploads/2020/02/header-1200.gif"
                  alt=""
                />

                <div class="mt-2 sm:mx-4 sm:mt-0">
                  <h1 class="text-xl font-bold text-gray-900 capitalize md:text-4xl group-hover:text-white">
                    {" "}
                    Send leads and contacts
                  </h1>
                  <p class=" text-start text-black  text-2xl group-hover:text-gray-300 mt-4">
                    Send leads and contacts automatically to your CRM. Follow up
                    faster, grow your email list and close more deals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Service;
