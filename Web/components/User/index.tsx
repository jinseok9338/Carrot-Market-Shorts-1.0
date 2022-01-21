import Info from "./Info";

export interface UserProps {
  user: {
    name: string;
    username: string;
    avatar: string;
  };
}
const User = ({ user }: UserProps) => {
  return (
    <div className="user-container flex items-center w-full h-[45px] p-[0_16px]">
      <img
        src={user.avatar}
        className="Avatar w-[44px] h-[44px] rounded-full mr-[12px]"
      ></img>
      <Info name={user.name} username={user.username} />
    </div>
  );
};

export default User;

// export const Container = styled.div`
// display: flex;
// align-items: center;
// width: 100%;
// height: 45px;
// padding: 0 16px;
// `;

// export const Avatar = styled.img`
// width: 44px;
// height: 44px;
// border-radius: 50%;
// margin-right: 12px;
// `;
