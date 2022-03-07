import { FC, useState } from "react";
import { Drawer } from "./Drawer";
import { Login } from "./Login";
import { SignUp } from "./SignUp";

interface ILoginPageProps {}

const LoginPage: FC<ILoginPageProps> = (props) => {
  //     "user_id": 1,
  //     "user_name": "jinseok918111",
  //     "email": "jinseok981222@gmail.com",
  //     "first_name": "jinseok93",
  //     "last_name": "Seo",
  //     "confirm_email": false,
  //     "password": "Lazctlazct93!@",

  const [login, setLogin] = useState<string | null>(null);

  return (
    <div className="container absolute h-[100%] flex flex-col items-center bg-[#050522]">
      <div className="h-[20vh]" />
      <img src="/images/logoForLogin.svg" className="w-[60vw] h-[30vh] " />
      <span className="text-[#EF5858] text-[3rem] leading-[3rem] mb-[2rem] ">
        WelCome
      </span>
      <div className="w-[80%] flex justify-center align-center mb-[7vh]">
        <span className="text-[#F4F4F4] font-[300] text-[1.2rem] leading-[2rem] text-center">
          We strive for the better market experience
        </span>
      </div>
      <button
        onClick={() => setLogin("signUp")}
        className="login bg-[#FFDE69] w-[70%] h-[6vh] rounded-[15px] mb-[2vh] shadow-[-1px_1px_10px_rgba(255,222,105,0.15)]"
      >
        <span className="text-[#1B1A40] text-[1.2rem] leading-[2rem] text-center font-[600]">
          Create Account
        </span>
      </button>
      <button
        onClick={() => setLogin("login")}
        className="login w-[70%] h-[6vh] rounded-[15px] border border-[#FFDE69] shadow-[-1px_1px_10px_rgba(255,222,105,0.15)]"
      >
        <span className="text-[#FFDE69] text-[1.2rem] leading-[2rem] text-center font-[600] ">
          Login
        </span>
      </button>
      <Drawer
        login={login}
        children={
          login == "login" ? (
            <Login setLogin={setLogin} />
          ) : login == "signUp" ? (
            <SignUp setLogin={setLogin} />
          ) : null
        }
      />
    </div>
  );
};

export default LoginPage;

{
  /* <form
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
</form> */
}
