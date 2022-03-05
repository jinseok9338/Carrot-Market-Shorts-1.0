import {
  faEye,
  faLock,
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
        className="text-[1.6rem] absolute top-[5vh] right-[8.5vw] text-[#EF5858] mr-1 cursor-pointer "
        onClick={() => setLogin(null)}
      />
      <div className="bg-[#FFECAA] w-[33vw] h-[3vh] absolute top-[14vh] left-[12vw] z-[1] flex justify-center   ">
          <span className="font-[1rem] ">username/email</span>
        </div>
      <div className="h-full w-full flex flex-col items-center justify-around ">
        <div className="flex flex-col items-center h-[13.5vh] mb-[2vh] ">
          <span className="text-[1.3rem]  mr-[44vw] mt-[3vh]  ">Welcome Back!!!</span>
          <span className="text-[2rem]  mr-[60vw] font-bold z-[2]">Login</span>
        </div>
        <form method="post" action="/api/login" className="flex flex-col-reverse items-center h-[23vh] justify-start ">
          <div className="flex flex-row float-left mb-[2.5vh] ml-[7vw] mt-[1.5vh] ">
          <input type="checkbox" className="box-border h-1 w-1 p-2 border border-black rounded-[1vw] bg-[#D7D7D7] mr-[1vw] appearance-none checked:bg-[#363336] "/>
          <span className="text-[0.7rem] mr-[20vw] ">Remember me</span>
          <span className="text-[0.78rem]  mr-[8vw]">Forgot your password?</span>
        </div>
        <FontAwesomeIcon
        icon={faEye}
        className="text-[1.5rem] absolute mb-[17.5vh] ml-[66vw] text-[#20201f]"
        />  
        <FontAwesomeIcon
        icon={faLock}
        className="text-[1.5rem] absolute mb-[8vh] ml-[66vw] text-[#A0936B]"
        /> 
          <input type="password" placeholder="************" className="w-[80vw] h-[7.5vh] mt-[2.5vh] rounded-[3vw] text-[1.3rem] pl-[4.2vw] pt-[0vh] border-[0.25vw] bg-[#FFECAA]  " onChange={(e)=>setPassword(e.target.value)} />
          <input type="text" placeholder="example@mail.com"  className="w-[80vw] h-[7.5vh] rounded-[3vw] text-[1.3rem] pl-[4.2vw] pt-[0vh] border-[0.5vw]  bg-[#FFECAA]  " onChange={(e)=>setEmail(e.target.value)} />
        </form>
        
        <button
          disabled={loading}
          className="w-[80vw] h-[6vh] bg-[#050522] text-[#FFDE69] rounded-[3vw] mb-[2vh] "
          onClick={async (e) => {
            setLoading(true);
            e.preventDefault();
            await submitForm();
            setLoading(false);
          }}
        >
          <span className="text-[1.3rem]" >Login</span>
        </button>
        <div className="mb-[2vh] mt-[0vh] ">
          <span className="mr-[2vw] text-[1.3rem]">Don't have an account?</span>
          <a className="text-[red] text-[1.3rem]" onClick={() => setLogin("SignUp")}>
            Register
          </a>
        </div>
      </div>
    </>
  );
};
//vh vw % rem
// 피그마와 가로 1.07배 가로 1.05배
// 가로
