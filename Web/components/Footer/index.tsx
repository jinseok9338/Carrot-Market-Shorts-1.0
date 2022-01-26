import { Avatar } from "../Video/Avatar";
import Icons from "./content";
import HeaderContent from "./content";

const Footer = () => {
  return (
    <div className="header-container w-full fixed bottom-0 right-0 left-0 h-[70px] bg-[black] flex justify-center z-10">
      <div className="icons-container w-full flex justify-between">
        <Icons menuText="Home"></Icons>
        <Icons menuText="Discover"></Icons>
        <Icons></Icons>
        <Icons menuText="Inbox"></Icons>
        <Icons menuText="Me"></Icons>
      </div>
    </div>
  );
};

export default Footer;
