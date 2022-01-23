import { Avatar } from "./Avatar";
import HeaderContent from "./content";

const Header = () => {
  return (
    <div className="header-container w-full fixed top-0 right-0 left-0 h-[70px] bg-white border-b-[1px] border-[tintBlue]/[0.2] flex content-center justify-center">
      <HeaderContent>
        <div className="flex flex-row flex-[1_1_auto] w-[500px]">
          <a className="cursor-pointer" href="#">
          <img
            className="w-[97px] ml-[4px] relative top-[-2px]"
            src="/images/carrot_market_title.png"
          ></img>
          </a>
          <p className="ml-[5px] font-[800] text-[14px] relative top-[-8px] text-tintBlue ">
            Shorts
          </p>
        </div>
        <div className="flex items-center">
   
          <Avatar src="https://p16-va.tiktokcdn.com/img/musically-maliva-obj/1658913186824198~c5_100x100.jpeg" />
        </div>
      </HeaderContent>
    </div>
  );
};

export default Header;

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
