import React from "react";
import { Link } from "react-router-dom";

const Nfc = () => {
  return (
    <div>
      <section class="bg-white mb-40">
        <div class="px-6 text-center md:px-36 lg:text-left">
          <div class="">
            <div class="grid items-center lg:grid-cols-2">
            <div class="mb-12 lg:mb-0">
                <img
                  src="https://vcardgen.com/wp-content/uploads/2023/05/smartmockups_lhjf5rpx-scaled.jpg"
                  class="w-3/4"
                  alt=""
                />
              </div>
              <div class="">
                <div className="">
                  <h1 className="text-2xl font-bold">NFC BUSINESS CARD</h1>
                  <h1 className="text-6xl  font-bold">
                    What is an NFC business card?
                  </h1>
                  <p className="mt-8 text-2xl font-normal">
                    Near-field communication (NFC) business cards enable you to
                    share
                  </p>
                  <p className="mt-4 text-2xl font-normal">
                    your contact information with a single tap. NFC business
                    cards have
                  </p>
                  <p className="mt-4 text-2xl font-normal">
                    two components: a digital business card and an NFC tag.
                  </p>
                  <p className="mt-16 text-2xl font-normal">
                    NFC tags come in several forms, like stickers, pop sockets,
                    keychains,
                  </p>
                  <p className="mt-4 text-2xl font-normal">
                    and physical cards. They contain tiny microchips, and when
                    tapped to
                  </p>
                  <p className="mt-4 text-2xl font-normal">
                    another smartphone, the information paired with your tag
                    (like the
                  </p>
                  <p className="mt-4 text-2xl font-normal">
                    link to your business card) automatically appears.
                  </p>
                  <div className=" mt-20">
                    <Link to='/dashboard'> <button
                    type="button"
                    class="text-white bg-yellow-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold rounded-full text-3xl px-14 py-6 text-center inline-flex items-center"
                  >
                    Get Yours
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      class="bi bi-arrow-right-circle w-10 h-10 ml-5 -mr-5"
                      viewBox="0 0 16 16"
                    >
                      {" "}
                      <path
                        fill-rule="evenodd"
                        d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"
                      />{" "}
                    </svg>
                  </button></Link>
                 
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Nfc;
