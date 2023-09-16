"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { AiOutlineMail } from "react-icons/ai";

interface IFormInput {
  email: string;
}

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const router = useRouter();

  const handleClick = (data: IFormInput) => {
    router.push("/");
    console.log(data);
  };

  return (
    <div>
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h2 className="text-3xl font-bold text-center mb-4">Sign In</h2>
          <form onSubmit={handleSubmit(handleClick)}>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                  <AiOutlineMail className="text-gray-400" />
                </span>
                <input
                  type="text"
                  {...register("email", { required: true })}
                  className="form-input pl-10 border-2"
                  placeholder="Email"
                />
                <div className="h-1">
                  {errors?.email?.type === "required" && (
                    <p className="text-red-60">❗ Email is required</p>
                  )}
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <button
                type="submit"
                className="bg-yellow-300 hover:bg-yellow-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Continue
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
