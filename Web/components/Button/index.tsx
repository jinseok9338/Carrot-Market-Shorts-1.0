//TODO Need a Color pallette
// TODO render different color based on if it's outlined or not


export interface ButtoProps {
    outlineWidth?:string
    bgColor?: string
    fontSize?:string
    textColor?:string
}

const Button = ({outlineWidth,bgColor, fontSize,textColor}:ButtoProps) => {
 const outlined = "outlined"
    return (
        <button className = {`w-full ${fontSize? fontSize :"text-lg"} 
        font-bold h-full ${bgColor} ${outlineWidth?outlineWidth :"border-none" } ${outlineWidth? textColor: "text-white"} cursor-pointer
         hover:${outlineWidth? "bg-tintBlack":bgColor }`} > 
            Hello
        </button>
    )
}


export default Button 


// import styled from 'styled-components';

// export default styled.button`
//   width: 100%;
//   font-size: ${(props) =>
//     props.fontSize != null ? `${props.fontSize}px` : '18px'};
//   font-weight: 700;
//   height: 100%;
//   background-color: ${(props) => props.theme.colors.primary};
//   border: none;
//   background: ${(props) =>
//     props.outlined ? '#FFF' : props.theme.colors.primary};
//   border: ${(props) =>
//     props.outlined ? `1px solid ${props.theme.colors.primary}` : 'none'};
//   color: ${(props) => (props.outlined ? props.theme.colors.primary : '#FFF')};
//   cursor: pointer;
//   :hover {
//     background: ${(props) =>
//       props.outlined ? 'rgba(22,24,35,0.03)' : props.theme.colors.primary};
//   }
// `;