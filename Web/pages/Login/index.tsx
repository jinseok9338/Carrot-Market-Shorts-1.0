import axios from "axios";
import { FC, useEffect, useState } from "react";
import { useAuth } from "../../utils/auth/useAuth";
import jwt from "jsonwebtoken";
import { UserType } from "../../utils/auth/AuthType";

interface ILoginPageProps {}

const LoginPage: FC<ILoginPageProps> = (props) => {
  // Do some Login logic here
  // TODO Connect DATABASE to the front end and use Redis for the auth

  //     "user_id": 1,
  //     "user_name": "jinseok918111",
  //     "email": "jinseok981222@gmail.com",
  //     "first_name": "jinseok93",
  //     "last_name": "Seo",
  //     "confirm_email": false,
  //     "password": "Lazctlazct93!@",

  const auth = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const submitForm = async () => {
    try {
      const res = await axios.post("/api/login", {
        email,
        password,
      });
      const data = res.data;
      console.log(data);
      if (data.data) {
        const profile = jwt.decode(data.data.access_token);
        auth?.setUser(profile as unknown as UserType);
      }
    } catch (e) {
      console.log((e as any).message);
    }
  };

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
            Username
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            name="username"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="******************"
          />
          {false && (
            <p className="text-[#b93030] text-xs italic">
              Please choose a password.
            </p>
          )}
        </div>
        <div className="flex items-center justify-between">
          <button
            disabled={loading}
            onClick={async (e) => {
              setLoading(true);
              e.preventDefault();
              await submitForm();
              setLoading(false);
            }}
            className="bg-[#3067b9] hover:bg-[#3a3af0] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-[1vw]"
            type="submit"
          >
            Sign In
          </button>
          <a
            className="inline-block align-baseline font-bold text-[0.5rem] text-blue-500 hover:text-blue-800 mt-4"
            href="/SignUp" // This is for forgot password page or link
          >
            Sign Up?
          </a>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
