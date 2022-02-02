import { FC, useState } from "react";
interface SignUpPageIProps {}

const SignUpPage: FC<SignUpPageIProps> = (props) => {
  // "user_name":"jinseok918111",
  // "password":"Lazctlazct93!@",
  // "password_confirm":"Lazctlazct93!@",
  // "email":"jinseok981222@gmail.com",
  // "first_name":"jinseok93",
  // "last_name":"Seo",

  const [user_name, setUser_name] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirm, setPassword_confirm] = useState("");
  const [email, setEmail] = useState("");
  const [first_name, setFirst_name] = useState("");
  const [last_name, setLast_name] = useState("");

  return (
    <div className="container h-screen flex flex-col items-center justify-center bg-[#181927]">
      <img
        src="/carrot_market.png"
        className="w-[40vw] h-[20vh] mb-[7vh]"
      ></img>
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        method="post"
        action="/api/login"
      >
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            name="username"
            type="text"
            value={"This is the user"}
            placeholder="Username"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Confirm Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            name="username"
            type="text"
            value={"This is the user"}
            placeholder="Username"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            name="username"
            type="text"
            value={"This is the user"}
            placeholder="Username"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            First Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            name="username"
            type="text"
            value={"This is the user"}
            placeholder="Username"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Last Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            name="username"
            type="text"
            value={"This is the user"}
            placeholder="Username"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Password
          </label>
          <input
            className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            name="password"
            type="password"
            placeholder="******************"
            value={"This is the user Password"}
          />
          {false && (
            <p className="text-[#b93030] text-xs italic">
              Please choose a password.
            </p>
          )}
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-[#3067b9] hover:bg-[#3a3af0] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-[1vw]"
            type="submit"
          >
            Sign Up
          </button>
          <a
            className="inline-block align-baseline font-bold text-[0.5rem] text-blue-500 hover:text-blue-800 mt-4"
            href="/Login" // This is for forgot password page or link
          >
            Already have an account?
          </a>
        </div>
      </form>
    </div>
  );
};

export default SignUpPage;
