interface MenuItemProps {
  active: boolean;
  spanText: string;
  img: string;
}

const MenuItem = ({ active, spanText, img }: MenuItemProps) => {
  return (
    <div
      className={`menu-item cursor-pointer text-tintBlue flex justify-start items-center p-[0_12px] box-border h-[60px] hover:bg-tintBlue/[0.03] `}
    >
      <img src={img} className="w-[40px] h-[40px]"></img>
      <span
        className={`${
          active ? "font-[700]" : "font-[400]"
        } ml-[13px] text-[24px] leading-[60px] ${
          active ? "text-primary" : "text-black"
        }`}
      >
        {spanText}
      </span>
    </div>
  );
};

export default MenuItem;

// export const MenuItem = styled.div`
//   cursor: pointer;
//   color: #161823;
//   display: flex;
//   justify-content: flex-start;
//   align-items: center;
//   padding: 0 12px;
//   box-sizing: border-box;
//   height: 60px;
//   :hover {
//     background: rgba(22, 24, 35, 0.03);
//   }
//   > span {
//     font-weight: ${(props) => (props.active ? '700' : '400')};
//     margin-left: 13px;
//     font-size: 24px;
//     line-height: 60px;
//     color: ${(props) => (props.active ? props.theme.colors.primary : 'black')};
//   }
//   > img {
//     width: 40px;
//     height: 40px;
//   }
// `;
