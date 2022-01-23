import { Avatar } from "./Avatar";
import Icons from "./content";
import HeaderContent from "./content";

const Footer = () => {
  return (
    <div className="header-container w-full fixed bottom-0 right-0 left-0 h-[70px] bg-[black]  border-[tintBlue]/[0.2] flex content-center justify-center">
      <div className="icons-container w-full flex justify-between">
        <Icons menuText="Home">
        <svg width="24" height="21" viewBox="0 0 24 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.6011 0.173834C12.323 -0.0579436 11.919 -0.0579458 11.6408 0.173834L0.861809 9.15635C0.143294 9.75511 0.566697 10.9246 1.50199 10.9246H3.14534L3.55034 19.0244C3.60356 20.0889 4.48209 20.9246 5.54784 20.9246H10.371C10.7852 20.9246 11.121 20.5888 11.121 20.1746V13.9246C11.121 13.6484 11.3448 13.4246 11.621 13.4246H12.621C12.8971 13.4246 13.121 13.6484 13.121 13.9246V20.1746C13.121 20.5888 13.4568 20.9246 13.871 20.9246H18.6941C19.7598 20.9246 20.6384 20.0889 20.6916 19.0244L21.0966 10.9246H22.7399C23.6752 10.9246 24.0986 9.75511 23.3801 9.15635L12.6011 0.173834Z" fill="white"/>
  </svg>
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
