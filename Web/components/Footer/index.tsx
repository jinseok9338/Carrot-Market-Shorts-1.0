import {
  faGlasses,
  faHome,
  faInbox,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Icons from "./content";

interface FooterProps {
  setProcess?: React.Dispatch<React.SetStateAction<string>>;
  process?: string;
}

const Footer = ({ setProcess, process }: FooterProps) => {
  //TODO Add different icons for the variation
  //TODO  use Font awesome instead of the img
  return (
    <div
      className={`footer-container w-full fixed bottom-0 right-0 left-0 h-[10vh] bg-[black] flex justify-center z-10`}
    >
      <div className="icons-container w-full flex justify-between">
        <Icons menuText="Home">
          <FontAwesomeIcon
            icon={faHome}
            className={`text-[1.5rem] ${
              process == "Home" ? "text-[white]" : "text-[white]/[0.4]"
            }`}
          />
        </Icons>
        <Icons menuText="Discover">
          <FontAwesomeIcon
            icon={faGlasses}
            className={`text-[1.5rem] ${
              process == "Discover" ? "text-[white]" : "text-[white]/[0.4]"
            } `}
          />
        </Icons>
        <div className="flex flex-col w-16 h-full justify-center items-center  cursor-pointer">
          <img src="/images/plus.png" className="w-14 h-10"></img>
        </div>
        <Icons menuText="Inbox">
          <FontAwesomeIcon
            icon={faInbox}
            className={`text-[1.5rem] ${
              process == "Inbox" ? "text-[white]" : "text-[white]/[0.4]"
            } `}
          />
        </Icons>
        <Icons menuText="Me">
          <FontAwesomeIcon
            icon={faUser}
            className={`text-[1.5rem] ${
              process == "Me" ? "text-[white]" : "text-[white]/[0.4]"
            }`}
          />
        </Icons>
      </div>
    </div>
  );
};

export default Footer;
