function Layout({ children }: any) {
  return (
    <>
      <Header></Header>
      <div
        className={`container-layout w-screen flex justify-start flex-auto pt-16`}
      >
        <div className={`flex-[2_2_240px] md:hidden md:flex-[0]`}>
          <Sidebar></Sidebar>
        </div>
        <div className="flex-[0] m-[0_auto] p-[50px_20px] flex max-w-[1194px]">
          {children}
        </div>
      </div>
    </>
  );
}

export default Layout;

// export const Container = styled.div`
//   width: 100vw;
//   display: flex;
//   justify-content: flex-start;
//   flex: 1 1 auto;
//   padding-top: 70px;
// `;

// export const SidebarContainer = styled.div`
//   flex: 0 0 240px;
//   @media (max-width: 768px) {
//     display: none;
//     flex: 0;
//   }
// `;

// export const ContentContainer = styled.div`
//   flex: 1;
//   margin: 0 auto;
//   padding: 50px 20px;
//   display: flex;
//   max-width: 1194px;
// `;
