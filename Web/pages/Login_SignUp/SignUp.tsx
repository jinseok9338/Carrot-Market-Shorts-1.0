import { faWindowClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Dispatch, FC, SetStateAction } from "react";
interface ISignUpProps {
  setLogin: Dispatch<SetStateAction<string | null>>;
}

export const SignUp: FC<ISignUpProps> = ({ setLogin }) => {
  return (
    <>
      <FontAwesomeIcon
        icon={faWindowClose}
        onClick={() => setLogin(null)}
        className="text-[1.1rem] absolute top-1 right-1 text-[black] mr-1"
      />
    </>
  );
};
