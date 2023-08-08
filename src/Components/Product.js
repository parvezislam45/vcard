import React from "react";
import { Link } from "react-router-dom";

const Product = () => {
  return (
    <div>
      <section class="mb-32 text-center px-32 mt-40">
      <h2 class="mb-20 text-6xl text-center font-bold">Our Product</h2>
        <div class="grid lg:grid-cols-4 gap-20 gap-y-20 mx-auto mt-40">
        <div  class=" bg-white shadow-xl shadow-gray-600/50 w-full pb-8 rounded-md transform hover:scale-105 transition duration-500">
          <div class="relative group">
            <img
              class="w-full h-64"
              src="https://5.imimg.com/data5/WD/ZG/BU/SELLER-1407191/3d-business-cards-500x500.jpg"
              alt="Colors"
            />
            <div class="absolute h-full w-full bg-black/20 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <button
                type="button"
                class="text-white  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-2xl font-semibold px-8 py-5 text-center inline-flex gap-4 items-center"
              >
                Buy Now
                <button
                  type="button"
                  class="bg-white  text-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-xs p-2 text-end inline-flex items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    class="bi bi-cursor-fill w-6 h-6"
                    viewBox="0 0 16 16"
                  >
                    {" "}
                    <path d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103z" />{" "}
                  </svg>
                </button>
              </button>
            </div>
            <p class="absolute top-0 bg-blue-600 text-white font-normal text-xl py-1 px-2 rounded-sm mx-5 mt-3">
              SALE
            </p>
            <p class="absolute top-0 right-0  text-white font-semibold py-1 px-3 mx-5 rounded-sm mt-3">
              <div class="flex items-center">
                <svg
                  aria-hidden="true"
                  class="w-7 h-7 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>First star</title>
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg
                  aria-hidden="true"
                  class="w-7 h-7 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Second star</title>
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg
                  aria-hidden="true"
                  class="w-7 h-7 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Third star</title>
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg
                  aria-hidden="true"
                  class="w-7 h-7 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Fourth star</title>
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg
                  aria-hidden="true"
                  class="w-7 h-7 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Fifth star</title>
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
              </div>
            </p>
          </div>
          <h1 class="mt-4 text-gray-800 text-center text-3xl font-bold cursor-pointer">
            Full Customized Card 
          </h1>
          <div className="flex gap-3 justify-center items-center">
            <h1 class=" text-gray-800 line-through text-2xl font-normal text-center cursor-pointer">
              1,799.00 ৳
            </h1>
            <h1 class=" text-red-500 text-2xl font-normal text-center cursor-pointer">
              1,599.00৳
            </h1>
          </div>
        </div>
        <div  class=" bg-white shadow-xl shadow-gray-600/50 w-full pb-8 rounded-md transform hover:scale-105 transition duration-500">
          <div class="relative group">
            <img
              class="w-full h-64"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXxq4WO_-KseVRYcr4CLz8LM84uWOnfn41Dz4qtdIh_U4D1BvcsiDDwrdL6cd6OI9InJE&usqp=CAU"
              alt="Colors"
            />
            <div class="absolute h-full w-full bg-black/20 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <button
                type="button"
                class="text-white  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-2xl font-semibold px-8 py-5 text-center inline-flex gap-4 items-center"
              >
                Buy Now
                <button
                  type="button"
                  class="bg-white  text-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-xs p-2 text-end inline-flex items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    class="bi bi-cursor-fill w-6 h-6"
                    viewBox="0 0 16 16"
                  >
                    {" "}
                    <path d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103z" />{" "}
                  </svg>
                </button>
              </button>
            </div>
            <p class="absolute top-0 bg-blue-600 text-white font-normal text-xl py-1 px-2 rounded-sm mx-5 mt-3">
              SALE
            </p>
            <p class="absolute top-0 right-0 bg-yellow-600 text-white font-normal text-xl py-1 px-3 mx-5 rounded-sm mt-3">
              %20 Discount
            </p>
          </div>
          <h1 class="mt-4 text-gray-800 text-center text-3xl font-bold cursor-pointer">
            Full Customized Card 2
          </h1>
          <div className="flex gap-3 justify-center items-center">
            <h1 class=" text-gray-800 line-through text-2xl font-normal text-center cursor-pointer">
              1,799.00 ৳
            </h1>
            <h1 class=" text-red-500 text-2xl font-normal text-center cursor-pointer">
              1,599.00৳
            </h1>
          </div>
        </div>
        <div  class=" bg-white shadow-xl shadow-gray-600/50 w-full pb-8 rounded-md transform hover:scale-105 transition duration-500">
          <div class="relative group">
            <img
              class="w-full h-64"
              src="https://5.imimg.com/data5/ANDROID/Default/2023/2/KF/HC/JE/185095063/product-jpeg-500x500.jpg"
              alt="Colors"
            />
            <div class="absolute h-full w-full bg-black/20 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <button
                type="button"
                class="text-white  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-2xl font-semibold px-8 py-5 text-center inline-flex gap-4 items-center"
              >
                Buy Now
                <button
                  type="button"
                  class="bg-white  text-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-2xl p-2 text-end inline-flex items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    class="bi bi-cursor-fill w-6 h-6"
                    viewBox="0 0 16 16"
                  >
                    {" "}
                    <path d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103z" />{" "}
                  </svg>
                </button>
              </button>
            </div>
            <p class="absolute top-0 bg-blue-600 text-white font-normal text-xl py-1 px-2 rounded-sm mx-5 mt-3">
              SALE
            </p>
            <p class="absolute top-0 right-0  text-white font-semibold py-1 px-3 mx-5 rounded-sm mt-3">
              <div class="flex items-center">
                <svg
                  aria-hidden="true"
                  class="w-7 h-7 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>First star</title>
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg
                  aria-hidden="true"
                  class="w-7 h-7 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Second star</title>
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg
                  aria-hidden="true"
                  class="w-7 h-7 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Third star</title>
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg
                  aria-hidden="true"
                  class="w-7 h-7 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Fourth star</title>
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg
                  aria-hidden="true"
                  class="w-7 h-7 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Fifth star</title>
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
              </div>
            </p>
          </div>
          <h1 class="mt-4 text-gray-800 text-center text-3xl font-bold cursor-pointer">
          Semi Customized Card
          </h1>
          <div className="flex gap-3 justify-center items-center">
            <h1 class=" text-gray-800 line-through text-2xl font-normal text-center cursor-pointer">
            1,299.00 ৳
            </h1>
            <h1 class=" text-red-500 text-2xl font-normal text-center cursor-pointer">
            1,099.00 ৳
            </h1>
          </div>
        </div>
        <div  class=" bg-white shadow-xl shadow-gray-600/50 w-full pb-8 rounded-md transform hover:scale-105 transition duration-500">
          <div class="relative group">
            <img
              class="w-full h-64"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtpqFCE8gi0LeBJXj4IghCZqE4Wzm5oU28MQ&usqp=CAU"
              alt="Colors"
            />
            <div class="absolute h-full w-full bg-black/20 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <button
                type="button"
                class="text-white  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-2xl font-semibold px-8 py-5 text-center inline-flex gap-4 items-center"
              >
                Buy Now
                <button
                  type="button"
                  class="bg-white  text-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-xs p-2 text-end inline-flex items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    class="bi bi-cursor-fill w-6 h-6"
                    viewBox="0 0 16 16"
                  >
                    {" "}
                    <path d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103z" />{" "}
                  </svg>
                </button>
              </button>
            </div>
            <p class="absolute top-0 bg-blue-600 text-white font-normal text-xl py-1 px-2 rounded-sm mx-5 mt-3">
              SALE
            </p>
            <p class="absolute top-0 right-0 bg-yellow-600 text-white font-normal text-xl py-1 px-3 mx-5 rounded-sm mt-3">
              %20 Discount
            </p>
          </div>
          <h1 class="mt-4 text-gray-800 text-center text-3xl font-bold cursor-pointer">
          VCard Branded Card
          </h1>
          <div className="flex gap-3 justify-center items-center">
            <h1 class=" text-gray-800 line-through text-2xl font-normal text-center cursor-pointer">
            899.00 ৳
            </h1>
            <h1 class=" text-red-500 text-2xl font-normal text-center cursor-pointer">
            699.00 ৳
            </h1>
          </div>
        </div>    
        </div>
      </section>
      <div
        // data-aos="fade-up"
        // data-aos-duration="2000"
        className="mx-auto text-center mt-16"
      >
        <Link to="/product">
        <button
          type="button"
          class="py-8 px-20 mr-2 mb-2 text-4xl font-medium text-white focus:outline-none bg-sky-500 rounded-full border border-gray-200 hover:bg-yellow-600 hover:text-white focus:z-10 focus:ring-4 focus:ring-gray-200"
        >
          View All Product
        </button>
        </Link>
      </div>
    </div>
  );
};

export default Product;
