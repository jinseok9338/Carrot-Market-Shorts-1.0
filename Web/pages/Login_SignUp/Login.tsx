import {
  faStopCircle,
  faTimesCircle,
  faWindowClose,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useRouter } from "next/router";
import { Dispatch, FC, SetStateAction, useState } from "react";
import { UserType } from "../../utils/auth/AuthType";
import { useAuth } from "../../utils/auth/useAuth";
import jwt from "jsonwebtoken";
interface ILoginProps {
  setLogin: Dispatch<SetStateAction<string | null>>;
}

export const Login: FC<ILoginProps> = ({ setLogin }) => {
  const auth = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const Router = useRouter();

  const submitForm = async () => {
    try {
      const res = await axios.post("/api/login", {
        email,
        password,
      });
      const data = res.data;
      console.log(data);
      if (data.data.access_token) {
        const profile = jwt.decode(data.data.access_token);
        localStorage.setItem("accessToken", data.data.access_token);
        auth?.setUser(profile as unknown as UserType);
        Router.replace("/");
      }
    } catch (e) {
      console.log((e as any).message);
    }
  };

  return (
    <>
      <FontAwesomeIcon
        icon={faTimesCircle}
        className="text-[2rem] absolute top-1 right-3 text-[#EF5858] mr-1 cursor-pointer "
        onClick={() => setLogin(null)}
      />
      <div className="h-full w-full flex flex-col items-center justify-around">
        <div className="flex flex-col">
          <span className="">Welcome Back</span>
          <span className="">Login</span>
        </div>
        <form method="post" action="/api/login">
          <input type="text" className="" />
          <input type="text" className="" />
        </form>
        <div className="">
          <span className="">Forgot your password?</span>
        </div>
        <button
          disabled={loading}
          className=""
          onClick={async (e) => {
            setLoading(true);
            e.preventDefault();
            await submitForm();
            setLoading(false);
          }}
        >
          Login
        </button>
        <div className="">
          <span className="">Don't have an account?</span>
          <a className="" onClick={() => setLogin("signUp")}>
            Sign Up
          </a>
        </div>
      </div>
    </>
  );
};
