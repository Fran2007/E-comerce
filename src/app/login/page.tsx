"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { AiOutlineMail, AiOutlineUserAdd } from "react-icons/ai";
import { MdPassword } from "react-icons/md";

interface Iform {
  name: string;
  email: string;
  password: string;
}

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Iform>();

  const router = useRouter();

  const handleClick = (data: Iform) => {
    router.push("/");
    console.log(data);
  };

  return (
    <div>
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h2 className="text-3xl">Create account</h2>
          <form onSubmit={handleSubmit(handleClick)}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Name
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                  <AiOutlineUserAdd className="text-gray-400" />
                </span>
                <input
                  type="text"
                  placeholder="Name"
                  {...register("name", { required: true })}
                  className="form-input pl-10 border-2"
                />
                {errors?.name?.type === "required" && (
                  <p className="text-red-600">❗ Name is required</p>
                )}
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Email
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                  <AiOutlineMail className="text-gray-400" />
                </span>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  className="form-input pl-10 border-2"
                  placeholder="Email"
                />
                {errors?.email?.type === "required" && (
                  <p className="text-red-600">❗ Email is required</p>
                )}
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Password
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                  <MdPassword className="text-gray-400" />
                </span>
                <input
                  type="password"
                  placeholder="Password"
                  {...register("password", { required: true, minLength: 6 })}
                  className="form-input pl-10 border-2"
                />
                {errors?.password?.type === "required" && (
                  <p className="text-red-600">❗ Password is required</p>
                )}
                {errors?.password?.type === "minLength" && (
                  <p className="text-red-600">
                    ❗ Minimum 6 characters required
                  </p>
                )}
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
