import User from "../User";
import Links from "./Links";
import MenuItem from "./MenuItem";

function Sidebar() {
  return (
    <div className="fixed top-[70px] left-0 bottom-0 w-[250px] pt-[26px] sidebar-container">
      <MenuItem active spanText="This is Music" img="/images/peopleIcon.svg" />
      <MenuItem active spanText="This is Music" img="/images/peopleIcon.svg" />
      <div className="Following w-full p-[20px_0] border-y-[0.5px] border-tintBlue/[0.12]">
        <div className="FollowingHeader font-[400] text-[16px] leading-[22px] text-tintBlue/[0.5] h-[8px] pl-[16px] mb-[28px] ">
          Suas pricipais contas
        </div>
        <User
          user={{
            name: "Will Smith",
            username: "willsmith",
            avatar:
              "https://p16-amd-va.tiktokcdn.com/img/musically-maliva-obj/1646315618666501~c5_100x100.jpeg",
          }}
        />
      </div>
      <div className="InfoContainer mt-[16px] pl-[16px] pb-[16px] w-[240px] box-border text-tintBlue/[0.5] ">
        <Links
          margin
          links={["Início", "Sobre", "Sala de imprensa", "ByteDance"]}
        />
        <Links links={["Início", "Sobre"]} />
        <Links links={["Início", "Sobre"]} />
        <Links margin links={["Sobre"]} />
        <Links margin links={["© 2020 TikTok"]} />
      </div>
    </div>
  );
}

export default Sidebar;

// export const Container = styled.div`
//   position: fixed;
//   top: 70px;
//   left: 0;
//   bottom: 0;
//   width: 250px;
//   padding-top: 26px;
// `;

// export const Following = styled.div`
//   width: 100%;
//   padding: 20px 0;
//   border-top: 0.5px solid rgba(22, 24, 35, 0.12);
//   border-bottom: 0.5px solid rgba(22, 24, 35, 0.12);
// `;

// export const FollowingHeader = styled.div`
//   font-weight: 400;
//   font-size: 16px;
//   line-height: 22px;
//   color: rgba(22, 24, 35, 0.5);
//   height: 8px;
//   padding-left: 16px;
//   margin-bottom: 28px;
// `;

// export const InfoContainer = styled.div`
//   margin-top: 16px;
//   padding-left: 16px;
//   padding-bottom: 24px;
//   width: 240px;
//   box-sizing: border-box;
//   color: rgba(22, 24, 35, 0.5) !important;
// `;
