import { FC, ReactNode } from "react";
interface IBoxContainerProps {
    children:ReactNode
    boxHeaderText:string
};

// export const ItemContainer = styled.div`
//   height: calc(100% - 72px);
//   overflow: auto;
//   cursor: pointer;
// `;



export const BoxContainer: FC<IBoxContainerProps> = ({children, boxHeaderText}) => {
    return (
        <div className="box-container relative border-[2px] border-tintBlack/[0.12] rounded-[8px] h-[380px] flex flex-col mb-[55px]">
        <div className="box-header p-[24px_16px] flex content-between items-baseline flex-[0_0_auto]">
          <span className ="font-[700] leading-[1] text-[24px]">{boxHeaderText}</span>
        </div>
        <div className="h-[calc(100%-72px)] overflow-auto cursor-pointer ">
            {children}
        </div>
      </div>
    );
}



// export const BoxContainer = styled.div`
//   position: relative;
//   border: 1px solid rgba(22, 24, 35, 0.12);
//   border-radius: 8px;
//   height: 380px;
//   display: flex;
//   flex-direction: column;
//   margin-bottom: 55px;
// `;

// export const BoxHeader = styled.div`
//   padding: 24px 16px;
//   padding-right: 12px;
//   display: flex;
//   justify-content: space-between;
//   align-items: baseline;
//   flex: 0 0 auto;
//   > span {
//     font-weight: 700;
//     line-height: 1;
//     font-size: 24px;
//   }
// `;


// export const ItemContainer = styled.div`
//   height: calc(100% - 72px);
//   overflow: auto;
//   cursor: pointer;
// `;

