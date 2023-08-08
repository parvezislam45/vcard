import React from "react";

const Started = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center">NFC BUSINESS CARD</h1>
      <h1 className="text-6xl font-bold text-center mt-5">
        How to get NFC Business Cards?
      </h1>
      <div class="w-full rounded bg-white p-10 lg:p-40 mx-auto text-gray-800">
        <div class="md:flex items-center justify-around">
          <div class="w-full md:w-1/2 px-10">
            <div  className=" mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 gap-y-20">
            <div class="w-5/6 text-gray-900">
                <div>
                  <img
                    src="https://vcardgen.com/wp-content/uploads/2023/05/Add-to-Cart-amico.svg"
                    alt=" random imgee"
                    class="w-full rounded-lg shadow-2xl"
                  />

                  <div class="relative px-4 -mt-10">
                    <div class="bg-white border-4 border-gray-100 p-6 rounded-xl shadow-xl">
                      <h4 class="mt-1 text-center text-3xl text-black font-bold">
                        Place Your Order
                      </h4>
                      <p className="text-xl mt-3 font-medium text-center text-black">Select Your Perfect vCard Variation, Add to Cart & Complete Checkout Process</p>
                    </div>
                  </div>
                </div>
              </div>
            <div class="w-5/6 text-gray-900">
                <div>
                  <img
                    src="https://vcardgen.com/wp-content/uploads/2023/05/Creation-process-rafiki.svg"
                    alt=" random imgee"
                    class="w-full rounded-lg shadow-2xl"
                  />

                  <div class="relative px-4 -mt-10">
                    <div class="bg-white border-4 border-gray-100 p-6 rounded-xl shadow-xl">
                      <h4 class="mt-1 text-center text-3xl text-black font-bold">
                      Design & Process
                      </h4>
                      <p className="text-xl mt-3 font-medium text-center text-black">Design & process starts after order. design team will contact you for custom design</p>
                    </div>
                  </div>
                </div>
              </div>
            <div class="w-5/6 text-gray-900">
                <div>
                  <img
                    src="https://vcardgen.com/wp-content/uploads/2023/05/Profile-Interface-rafiki.svg"
                    alt=" random imgee"
                    class="w-full rounded-lg shadow-2xl"
                  />

                  <div class="relative px-4 -mt-10">
                    <div class="bg-white border-4 border-gray-100 p-6 rounded-xl shadow-xl">
                      <h4 class="mt-1 text-center text-3xl text-black font-bold">
                      Create Profile
                      </h4>
                      <p className="text-xl mt-3 font-medium text-center text-black">Customize accurately to ensure it is up to date. When you get the card</p>
                    </div>
                  </div>
                </div>
              </div>
            <div class="w-5/6 text-gray-900">
                <div>
                  <img
                    src="https://vcardgen.com/wp-content/uploads/2023/05/Mention-amico.svg"
                    alt=" random imgee"
                    class="w-full rounded-lg shadow-2xl"
                  />

                  <div class="relative px-4 -mt-10">
                    <div class="bg-white border-4 border-gray-100 p-6 rounded-xl shadow-xl">
                      <h4 class="mt-1 text-center text-3xl text-black font-bold">
                      Tap, Share & Go
                      </h4>
                      <p className="text-xl mt-3 font-medium text-center text-black">Just tap or scan your Business Card to instantly share your profile. Nothing else is needed</p>
                    </div>
                  </div>
                </div>
              </div>   
            </div>
          </div>
          <div class="w-full md:w-1/3 px-10 mt-5">
            <div class="relative">
              <img
                src="https://vcardgen.com/wp-content/uploads/2023/05/iphone13pro.png"
                class="w-full relative z-10"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Started;
