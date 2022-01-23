import { Avatar } from "./Avatar";
import Icons from "./content";
import HeaderContent from "./content";

//TODO Problem with the sizing of the screen and the problem with the svg being too small
const Footer = () => {
  return (
    <div className="header-container w-full fixed bottom-0 right-0 left-0 h-[70px] bg-[black] flex justify-center">
      <div className="icons-container w-full flex justify-between">
        <Icons menuText="Home">
          <svg
            width="24"
            height="21"
            viewBox="0 0 24 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12.6011 0.173834C12.323 -0.0579436 11.919 -0.0579458 11.6408 0.173834L0.861809 9.15635C0.143294 9.75511 0.566697 10.9246 1.50199 10.9246H3.14534L3.55034 19.0244C3.60356 20.0889 4.48209 20.9246 5.54784 20.9246H10.371C10.7852 20.9246 11.121 20.5888 11.121 20.1746V13.9246C11.121 13.6484 11.3448 13.4246 11.621 13.4246H12.621C12.8971 13.4246 13.121 13.6484 13.121 13.9246V20.1746C13.121 20.5888 13.4568 20.9246 13.871 20.9246H18.6941C19.7598 20.9246 20.6384 20.0889 20.6916 19.0244L21.0966 10.9246H22.7399C23.6752 10.9246 24.0986 9.75511 23.3801 9.15635L12.6011 0.173834Z"
              fill="white"
            />
          </svg>
        </Icons>
        <Icons menuText="Discover">
          <svg
            width="21"
            height="21"
            viewBox="0 0 21 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M14.384 16.2124C12.8826 17.335 11.019 18 9 18C4.02954 18 0 13.9705 0 9C0 4.02954 4.02954 0 9 0C13.9705 0 18 4.02954 18 9C18 11.2307 17.1885 13.272 15.8445 14.8445L20.2915 19.2915C20.4868 19.4868 20.4868 19.8035 20.2915 19.9985L19.5845 20.7058C19.3892 20.9011 19.0725 20.9011 18.8774 20.7058L14.384 16.2124ZM16 9C16 12.866 12.866 16 9 16C5.13403 16 2 12.866 2 9C2 5.13403 5.13403 2 9 2C12.866 2 16 5.13403 16 9Z"
              fill="white"
            />
          </svg>
        </Icons>
        <Icons>
          <svg
            className="mb-[1.2rem]"
            width="50"
            height="35"
            viewBox="0 0 44 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="7.5"
              y="0.5"
              width="36"
              height="28"
              rx="8"
              fill="#E6436D"
            />
            <rect
              x="0.5"
              y="0.5"
              width="36"
              height="28"
              rx="8"
              fill="#65D2E9"
            />
            <rect x="4" y="0.5" width="36" height="28" rx="8" fill="white" />
            <path
              d="M21.25 8.25C20.9739 8.25 20.75 8.47386 20.75 8.75V13.5H16C15.7239 13.5 15.5 13.7239 15.5 14V15.5C15.5 15.7761 15.7239 16 16 16H20.75V20.75C20.75 21.0261 20.9739 21.25 21.25 21.25H22.75C23.0261 21.25 23.25 21.0261 23.25 20.75V16H28C28.2761 16 28.5 15.7761 28.5 15.5V14C28.5 13.7239 28.2761 13.5 28 13.5H23.25V8.75C23.25 8.47386 23.0261 8.25 22.75 8.25H21.25Z"
              fill="#161722"
            />
          </svg>
        </Icons>
        <Icons menuText="Inbox">
          <svg
            width="20"
            height="21"
            viewBox="0 0 20 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.5 8C6.22386 8 6 8.22386 6 8.5V9.5C6 9.77614 6.22386 10 6.5 10H13.5C13.7761 10 14 9.77614 14 9.5V8.5C14 8.22386 13.7761 8 13.5 8H6.5Z"
              fill="white"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M2 0C0.895431 0 0 0.895431 0 2V15C0 16.1046 0.895431 17 2 17H6.54007L9.23785 20.1759C9.6372 20.6461 10.3628 20.6461 10.7621 20.1759L13.4599 17H18C19.1046 17 20 16.1046 20 15V2C20 0.89543 19.1046 0 18 0H2ZM2 15V2H18V15H13.0037C12.7096 15 12.4305 15.1294 12.2405 15.3538L10 18L7.75951 15.3538C7.56951 15.1294 7.29037 15 6.99633 15H2Z"
              fill="white"
            />
          </svg>
        </Icons>
        <Icons menuText="Me">
          <svg
            width="23"
            height="28"
            viewBox="0 0 19 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M15.3582 5.75C15.3582 8.92564 12.7838 11.5 9.60815 11.5C6.43252 11.5 3.85815 8.92564 3.85815 5.75C3.85815 2.57436 6.43252 0 9.60815 0C12.7838 0 15.3582 2.57436 15.3582 5.75ZM13.3582 5.75C13.3582 7.82107 11.6792 9.5 9.60815 9.5C7.53709 9.5 5.85815 7.82107 5.85815 5.75C5.85815 3.67893 7.53709 2 9.60815 2C11.6792 2 13.3582 3.67893 13.3582 5.75Z"
              fill="white"
            />
            <path
              d="M0.520516 19.7228C0.445589 19.9683 0.582491 20.225 0.823674 20.3128L1.75686 20.6525C2.04011 20.7555 2.34835 20.5856 2.43676 20.2975C3.37768 17.2301 6.23247 15 9.60814 15C12.9838 15 15.8386 17.2301 16.7796 20.2975C16.868 20.5856 17.1762 20.7555 17.4595 20.6525L18.3926 20.3128C18.6338 20.225 18.7707 19.9683 18.6958 19.7228C17.5079 15.831 13.8886 13 9.60814 13C5.32765 13 1.70838 15.831 0.520516 19.7228Z"
              fill="white"
            />
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