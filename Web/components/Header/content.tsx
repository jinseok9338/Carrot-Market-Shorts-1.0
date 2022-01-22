//TODO children: any for now ... but will have its type..
const HeaderContent = ({ children }: any) => (
  <div className="flex h-full justify-between items-center p-[0_20px] ">
    {children}
  </div>
);

export default HeaderContent;

// export const Content = styled.div`
//   display: flex;
//   height: 100%;
//   justify-content: space-between;
//   align-items: center;
//   padding: 0 20px;
// `;
