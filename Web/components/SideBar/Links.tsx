interface LinksProps {
  margin?: boolean;
  links: string[];
}

const Links = ({ margin, links }: LinksProps) => {
  return (
    <div className={`${margin ? "m-[8px]" : "m-0"} `}>
      {links.map((link) => (
        <a className="cursor-pointer inline-block mr-[5px] mt-[5px] font-[600] text-[12] leading-[12px] text-tintBlack/[0.5] font-proxima hover:decoration-solid">
          {link}
        </a>
      ))}
    </div>
  );
};

export default Links;

// export const Links = styled.div`
//   margin-bottom: ${(props) => (props.margin ? '8px' : '0px')};
//   > a {
//     cursor: pointer;
//     display: inline-block;
//     margin-right: 5px;
//     margin-top: 5px;
//     font-weight: 600;
//     font-size: 12px;
//     line-height: 12px;
//     color: rgba(22, 24, 35, 0.5);
//     font-family: 'proxima-semibold', PingFangSC, sans-serif;
//     :hover {
//       text-decoration: underline;
//     }
//   }
// `;
