import { Avatar } from "./Avatar";
import Icons from "./content";
import HeaderContent from "./content";


//TODO Problem with the sizing of the screen and the problem with the svg being too small
const Footer = () => {
  return (
    <div className="header-container w-full fixed bottom-0 right-0 left-0 h-[70px] bg-[black]  border-[tintBlue]/[0.2] flex content-center justify-center">
      <div className="icons-container w-full flex justify-between">
        <Icons menuText="Home">
 
        </Icons>
        <Icons menuText="Home">
 
 </Icons>
 <Icons menuText="Home">
 
 </Icons>
 <Icons menuText="Home">
 
 </Icons>
      </div>
    </div>
  );
};

export default Footer;

// export const Container = styled.div`
//   width: 100%;
//   position: fixed;
//   top: 0;
//   right: 0;
//   left: 0;
//   height: 70px;
//   background: #fff;
//   border-bottom: 1px solid rgba(34, 90, 89, 0.2);
//   z-index: 1000;
// `;

// export const LogoIcon = styled.img`
//   width: 28px;
// `;

// export const Logo = styled.img`
//   width: 97px;
//   margin-left: 4px;
//   position: relative;
//   top: -2px;
// `;

// export const OptionsContainer = styled.div`
//   display: flex;
//   align-items: center;
// `;

// export const Icon = styled.img`
//   width: 37px;
//   height: 37px;
// `;
