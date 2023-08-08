import React, { useEffect } from "react";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import auth from "../../firebase.init";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Loading from "./Loading";

const Signup = () => {
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  let signInError;
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/create";

  useEffect(() => {
    if (user || gUser) {
      navigate(from, { replace: true });
    }
  }, [user, gUser, from, navigate]);

  if (loading || gLoading) {
    return <Loading />;
  }

  if (error || gError) {
    signInError = (
      <p className="text-red-500">
        <small>{error?.message || gError?.message}</small>
      </p>
    );
  }

  const onSubmit = (data) => {
    createUserWithEmailAndPassword(data.email, data.password);
    console.log(data);
  };
  return (
    <div>
      <div>
        <div class="py-16 px-4 md:px-6 2xl:px-0 flex justify-center items-center 2xl:mx-auto 2xl:container">
          <div class="flex flex-col justify-start items-start w-full space-y-9">
            <div class="flex flex-col xl:flex-row justify-center xl:justify-between space-y-6 xl:space-y-0 xl:space-x-6 w-full">
              <div class=" flex flex-col sm:flex-row xl:flex-col justify-center items-center bg-gray-100 dark:bg-gray-800 py-7 sm:py-0 xl:py-10 px-10 xl:w-full">
                <div class="mt-6 sm:mt-0 xl:my-10 xl:px-20 w-52 sm:w-96 xl:w-auto">
                  <img
                    src="https://i.ibb.co/0GFzTP4/Rectangle-131.png"
                    alt="headphones"
                  />
                </div>
              </div>

              <div class="p-8 bg-gray-100 dark:bg-gray-800 flex flex-col lg:w-full xl:w-3/5">
                <button class="border border-transparent hover:border-gray-300 bg-gray-900  flex flex-row justify-center items-center space-x-2 py-4 rounded w-full">
                  <div>
                    <svg
                      class="fill-current"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.9099 4.27692C9.6499 4.27692 9.1174 4.87817 8.2399 4.87817C7.34021 4.87817 6.65396 4.28129 5.56208 4.28129C4.49333 4.28129 3.35365 4.93379 2.6299 6.04535C1.61365 7.61285 1.78615 10.565 3.43208 13.08C4.02083 13.9804 4.80708 14.99 5.83833 15.001H5.85708C6.75333 15.001 7.01958 14.4141 8.25302 14.4072H8.27177C9.48677 14.4072 9.73052 14.9975 10.623 14.9975H10.6418C11.673 14.9866 12.5015 13.8679 13.0902 12.971C13.514 12.326 13.6715 12.0022 13.9965 11.2725C11.6155 10.3688 11.233 6.99348 13.5877 5.69942C12.869 4.79942 11.859 4.27817 10.9068 4.27817L10.9099 4.27692Z"
                        fill="currentColor"
                      />
                      <path
                        d="M10.6338 1C9.88379 1.05094 9.00879 1.52844 8.49629 2.15188C8.03129 2.71688 7.64879 3.555 7.79879 4.36781H7.85879C8.65754 4.36781 9.47504 3.88688 9.95254 3.27063C10.4125 2.68406 10.7613 1.85281 10.6338 1V1Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <div>
                    <p class="text-4xl font-bold text-white leading-4">
                      Sign Up
                    </p>
                  </div>
                </button>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <label class="mt-8 text-xl font-normal leading-4 text-gray-800 dark:text-gray-50">
                    Please Give Your Name
                  </label>
                  <div class="mt-2 flex-col">
                    <div class="flex-row flex gap-5">
                      <input
                        class="border rounded-bl border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600"
                        type="text"
                        name=""
                        id=""
                        placeholder="First Name"
                        {...register("firstName", {
                          required: {
                            value: true,
                            message: "Name is Required",
                          },
                        })}
                      />

                      <input
                        class="border rounded-br border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600"
                        type="text"
                        name=""
                        id=""
                        placeholder="Last Name"
                        {...register("lastName", {
                          required: {
                            value: true,
                            message: "Name is Required",
                          },
                        })}
                      />
                    </div>
                  </div>
                  <div class="mt-8">
                    <input
                      class="border border-gray-300 p-4 rounded w-full text-base leading-4 placeholder-gray-600 text-gray-600"
                      type="text"
                      name=""
                      id=""
                      placeholder="Phone"
                      {...register("phone", {
                        required: {
                          value: true,
                          message: "number is Required",
                        },
                      })}
                    />
                  </div>
                  <div class="mt-8">
                    <input
                      class="border border-gray-300 p-4 rounded w-full text-base leading-4 placeholder-gray-600 text-gray-600"
                      type="email"
                      name=""
                      id=""
                      placeholder="Email"
                      {...register("email", {
                        required: {
                          value: true,
                          message: "Email is Required",
                        },
                        pattern: {
                          value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                          message: "Provide a valid Email",
                        },
                      })}
                    />
                    <label className="label">
                      {errors.email?.type === "required" && (
                        <span className="label-text-alt text-red-500">
                          {errors.email.message}
                        </span>
                      )}
                      {errors.email?.type === "pattern" && (
                        <span className="label-text-alt text-red-500">
                          {errors.email.message}
                        </span>
                      )}
                    </label>
                  </div>
                  <label class="mt-8 text-base leading-4 text-gray-800 dark:text-gray-50">
                    Please Input Your Password
                  </label>
                  <div class="mt-2 flex-col">
                    <div>
                      <input
                        class="border rounded border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600"
                        type="password"
                        name=""
                        id=""
                        placeholder="Password"
                        {...register("password", {
                          required: {
                            value: true,
                            message: "Password is Required",
                          },
                          minLength: {
                            value: 6,
                            message: "Must be 6 characters or longer",
                          },
                        })}
                      />
                      <label className="label">
                        {errors.password?.type === "required" && (
                          <span className="label-text-alt text-red-500">
                            {errors.password.message}
                          </span>
                        )}
                        {errors.password?.type === "minLength" && (
                          <span className="label-text-alt text-red-500">
                            {errors.password.message}
                          </span>
                        )}
                      </label>
                    </div>
                  </div>
                  <label class="mt-8 text-base leading-4 text-gray-800 dark:text-gray-50">
                    Please Re-Type Your Your Password
                  </label>
                  <div class="mt-2 flex-col">
                    <div>
                      <input
                        class="border rounded border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600"
                        type="password"
                        name=""
                        id=""
                        placeholder="Re-Type Password"
                      />
                    </div>
                  </div>
                  {signInError}
                  <div class="mt-8">
                    <input type="submit" value="Sign Up" class="border border-gray-300 btn bg-gray-700 hover:bg-yellow-600 p-4 rounded w-full text-base  text-white"/>
                  </div>
                </form>
                <Link to='/login'><p class="underline hover:underline-offset-4 text-center text-white mt-5">Already Have A Account Login</p></Link>
                <div class="flex flex-row justify-center items-center mt-6">
                    <hr class="border w-full" />
                    <p class="flex flex-shrink-0 px-4 text-base leading-4 text-gray-600 dark:text-white">
                      or Continue With
                    </p>
                    <hr class="border w-full" />
                  </div>
                  <div className="text-center mt-8">
                    <button 
                    onClick={() => signInWithGoogle()}
                      type="button"
                      class="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-xl px-5 py-2.5 text-center inline-flex items-center  mr-2 mb-2"
                    >
                      <svg
                        class="w-8 h-8 mr-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 18 19"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      Sign Up with Google
                    </button>
                  </div>

                  <div className="text-center mt-3">
                    <button
                      type="button"
                      class="text-white text-xl bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg  px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 mr-2 mb-2"
                    >
                      <svg
                        class="w-8 h-8 mr-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 8 19"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      Sign Up with Facebook
                    </button>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
