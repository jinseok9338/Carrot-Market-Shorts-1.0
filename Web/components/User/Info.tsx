
interface InfoProps {
    name:string;
    username:string
}

const Info =({name, username}:InfoProps) =>{
    return (
        <div className ="flex flex-col">
        <a className ="font-[600] text-[17px] hover:decoration-1">{name}</a>
        <span className="font-[400] text-[14px] text-tintBlue/[0.5]">{username}</span>
      </div>
    )
}

export default Info


// export const Info = styled.div`
// display: flex;
// flex-direction: column;
// > a {
//   font-weight: 600;
//   font-size: 17px;
//   :hover {
//     text-decoration: underline;
//   }
// }
// > span {
//   font-weight: 400;
//   font-size: 14px;
//   color: rgba(22, 24, 35, 0.5);
// }
// `;
