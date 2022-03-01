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
      <div className="h-[2.7vh] w-[27vw] ">
          <span>username/email</span>
        </div>
      <div className="h-full w-full flex flex-col items-center justify-around ">
        <div className="flex flex-col items-center h-[12vh] ">
          <span className="text-[1.5rem] mb-[0vh] mr-[57vw] mt-[2vh]  ">Welcome Back</span>
          <span className="text-[2rem] mb-[0vh] mr-[73vw]">Login</span>
        </div>
        <form method="post" action="/api/login" className="flex flex-col-reverse items-center h-[23vh] justify-start ">
          <div className="flex flex-col mb-[3vh] ml-[55vw] mt-[1vh] ">
          <span className="text-[0.7rem]  ">Forgot your password?</span>
        </div>
          <input type="password" placeholder="************" className="w-[80vw] h-[8vh] mt-[1vh] rounded-[3vw] text-[3vh] pl-[5vw] " />
          <input type="text" placeholder="example@mail.com" className="w-[80vw] h-[8vh] rounded-[3vw] text-[3vh] pl-[5vw] " />
        </form>
        
        <button
          disabled={loading}
          className="w-[80vw] h-[8vh] bg-[#050522] text-[#FFDE69] rounded-[3vw] mb-[2vh] "
          onClick={async (e) => {
            setLoading(true);
            e.preventDefault();
            await submitForm();
            setLoading(false);
          }}
        >
          Login
        </button>
        <div className="mb-[2vh] mt-[0vh] ">
          <span className="mr-[2vw]">Don't have an account?</span>
          <a className="" onClick={() => setLogin("signUp")}>
            Sign Up
          </a>
        </div>
      </div>
    </>
  );
};
//vh vw % rem
// 피그마와 가로 1.07배 가로 1.05배
// 가로
