import React, { useState } from "react";

const Question = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  return (
    <div className="mt-20">
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full  md:px-24 lg:px-40 lg:py-20">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <p className="text-md text-center font-normal text-black">
            . WHY CHOOSE US .
          </p>
          <h1 className="text-black text-5xl font-bold text-center">
            Frequently Asked Questions
          </h1>
        </div>
        <div className="grid  gap-8 lg:grid-cols-2 sm:mx-auto mt-28">
          <div className="flex flex-col">
            <div className="border shadow-md bg-gray-100 rounded-full"data-aos="fade-right"  data-aos-duration="2000" >
              <button
                type="button"
                aria-label="Open item"
                title="Open item"
                className="flex items-center justify-between w-full p-4 focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
              >
                <p className="text-3xl text-black font-medium hover:text-yellow-600">
                  What is a digital business card?
                </p>
                <div className="flex items-center justify-center w-20 border rounded-full mt-10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className={`w-40 animate-bounce bi bi-arrow-down-circle-fill text-gray-600 transition-transform duration-200 ${
                        isOpen ? "transform rotate-180" : ""
                      }`}
                    viewBox="0 0 24 24"
                  >
                    {" "}
                    <path
                      d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"
                      id="mainIconPathAttribute"
                      fill="#1bd5ee"
                    ></path>{" "}
                  </svg>
                </div>
              </button>
              {isOpen && (
                <div className="p-4 pt-0">
                  <p className="text-gray-700 text-2xl">
                    Digital business cards are used by both individuals and
                    businesses to quickly and sustainably exchange contact
                    information. They’re more engaging, cost-effective, and
                    eco-friendly than traditional physical business cards.
                    Digital cards are also known as virtual, electronic, and—in
                    some cases—NFC business cards.
                  </p>
                </div>
              )}
            </div>
            <div className="border rounded-full shadow-md bg-gray-100 mt-10"data-aos="fade-right"  data-aos-duration="2000">
              <button
                type="button"
                aria-label="Open item2"
                title="Open item2"
                className="flex items-center justify-between w-full p-4 focus:outline-none"
                onClick={() => setIsOpen2(!isOpen2)}
              >
                <p className="text-3xl font-medium text-black hover:text-yellow-600">
                  How do I share my business cards?
                </p>
                <div className="flex items-center justify-center w-20 mt-3 border rounded-full">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className={`w-20  animate-bounce bi bi-arrow-down-circle-fill text-gray-600 transition-transform duration-200 ${
                        isOpen ? "transform rotate-180" : ""
                      }`}
                    viewBox="0 0 24 24"
                  >
                    {" "}
                    <path
                      d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"
                      id="mainIconPathAttribute"
                      fill="#1bd5ee"
                    ></path>{" "}
                  </svg>
                </div>
              </button>
              {isOpen2 && (
                <div className="p-4 pt-0">
                  <p className="text-gray-700 text-2xl">
                    There are multiple ways to share a digital business card.
                    The quickest way to share your digital business card in
                    person is with your QR code. With HiHello you can also send
                    your digital business card to someone via a text message,
                    email, social media, or NFC tag. For iPhone users, you can
                    even share your virtual card using an Apple Watch.
                  </p>
                </div>
              )}
            </div>
            <div className="border rounded-full shadow-md bg-gray-100 mt-10"data-aos="fade-right"  data-aos-duration="2000">
              <button
                type="button"
                aria-label="Open item3"
                title="Open item3"
                className="flex items-center justify-between w-full p-4 focus:outline-none"
                onClick={() => setIsOpen3(!isOpen3)}
              >
                <p className="text-3xl font-medium text-black hover:text-yellow-600">
                  What is a digital business card?
                </p>
                <div className="flex items-center justify-center w-20 mt-3 border rounded-full">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className={`w-20 animate-bounce bi bi-arrow-down-circle-fill text-gray-600 transition-transform duration-200 ${
                        isOpen ? "transform rotate-180" : ""
                      }`}
                    viewBox="0 0 24 24"
                  >
                    {" "}
                    <path
                      d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"
                      id="mainIconPathAttribute"
                      fill="#1bd5ee"
                    ></path>{" "}
                  </svg>
                </div>
              </button>
              {isOpen3 && (
                <div className="p-4 pt-0">
                  <p className="text-gray-700 text-2xl">
                    Digital business cards are used by both individuals and
                    businesses to quickly and sustainably exchange contact
                    information. They’re more engaging, cost-effective, and
                    eco-friendly than traditional physical business cards.
                    Digital cards are also known as virtual, electronic, and—in
                    some cases—NFC business cards.
                  </p>
                </div>
              )}
            </div>
            <div className="border rounded-full shadow-md mt-10 bg-gray-100"data-aos="fade-right"  data-aos-duration="2000">
              <button
                type="button"
                aria-label="Open item4"
                title="Open item4"
                className="flex items-center justify-between w-full p-4 focus:outline-none"
                onClick={() => setIsOpen4(!isOpen4)}
              >
                <p className="text-3xl font-medium text-black hover:text-yellow-600">
                  What is a digital business card?
                </p>
                <div className="flex items-center justify-center w-20 mt-3 border rounded-full">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className={`w-20 animate-bounce bi bi-arrow-down-circle-fill text-gray-600 transition-transform duration-200 ${
                        isOpen ? "transform rotate-180" : ""
                      }`}
                    viewBox="0 0 24 24"
                  >
                    {" "}
                    <path
                      d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"
                      id="mainIconPathAttribute"
                      fill="#1bd5ee"
                    ></path>{" "}
                  </svg>
                </div>
              </button>
              {isOpen4 && (
                <div className="p-4 pt-0">
                  <p className="text-gray-700 text-2xl">
                    Digital business cards are used by both individuals and
                    businesses to quickly and sustainably exchange contact
                    information. They’re more engaging, cost-effective, and
                    eco-friendly than traditional physical business cards.
                    Digital cards are also known as virtual, electronic, and—in
                    some cases—NFC business cards.
                  </p>
                </div>
              )}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-5"data-aos="fade-left"  data-aos-duration="2000" >
            <img
              className="object-cover w-full h-96 col-span-2 rounded shadow-lg"
              src="https://vcardgen.com/wp-content/uploads/2023/05/smartmockups_lhjepspq.jpg"
              alt=""
            />
            <img
              className="object-cover w-full h-72 rounded shadow-lg"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU6ej2dFYORHVFQhTfkBNx1Z8xir7xZkZi_g&usqp=CAU"
              alt=""
            />
            <img
              className="object-cover w-full h-72 rounded shadow-lg"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXKNa-amjVGP_dOnWVh9aSKmza_sMxt5QPyw&usqp=CAU"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question;
