import { useProcess } from "../../utils/ProcessLoader/useProcess";
import Icons from "./content";

const Footer = () => {
  const provideProcess = useProcess();

  //TODO Add different icons for the variation
  //TODO  use Font awesome instead of the img
  return (
    <div
      className={`footer-container w-full fixed bottom-0 right-0 left-0 h-[10vh] bg-[black] flex justify-center z-10`}
    >
      <div className="icons-container w-full flex justify-between">
        <Icons menuText="Home">
          <img
            src={
              provideProcess?.process == "Home"
                ? "/images/home.png"
                : "/images/home.png"
            }
          ></img>
        </Icons>
        <Icons menuText="Discover">
          <img
            src={
              provideProcess?.process == "Discover"
                ? "/images/search.png"
                : "/images/search.png"
            }
          ></img>
        </Icons>
        <div className="flex flex-col w-16 h-full justify-center items-center  cursor-pointer">
          <img src="/images/plus.png" className="w-14 h-10"></img>
        </div>
        <Icons menuText="Inbox">
          <img
            src={
              provideProcess?.process == "Inbox"
                ? "/images/inbox.png"
                : "/images/inbox.png"
            }
          ></img>
        </Icons>
        <Icons menuText="Me">
          <img
            src={
              provideProcess?.process == "Me"
                ? "/images/me.png"
                : "/images/me.png"
            }
          ></img>
        </Icons>
      </div>
    </div>
  );
};

export default Footer;
