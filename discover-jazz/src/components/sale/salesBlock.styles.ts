import styled, {css} from "styled-components";

const displayCenter = css`
  display: flex;
  justify-items: center;
  align-items: center;

`

type Props = {
  imageUrl?: any;
  color?: string;
};

export const StyledSalesBlocks = styled.section<Props>`
  display: flex; 
  /* justify-content: left;       */
  margin: 0rem;
`;

export const StyledContainerHeading = styled.h1`

  justify-self: left;
  display: flex;  
  justify-content: center; 
  align-items: center; 
  width: 4.5rem;
  margin: 0rem;  
  left: 3rem;  
  
  /* width: auto;  */
  position: relative; 
  



`
export const StyledHeading = styled.h2`

  display: flex;
  font-size: 4rem;    
  font-style: bold;   
  font-weight: 700;
  transform: rotate(270deg);
  color: #000000;
  text-transform: uppercase;

`;

export const StyledSubheading = styled.h3`

  display: flex;
  top: 0rem;
`

export const StyledPrice = styled.p`
`
export const StyledUpToDate = styled.p`
`

export const StyledInputWindow = styled.p`
`
export const StyledActionButton = styled.p`
`
export const StyledImage = styled.p`

  /* position: relative; */
  ${displayCenter} 
  
  /* top: 10.563rem;
  left: 14.492rem; */
  
  /* height: 6.375rem;
  width: 61.016rem; */

`
// 244.5rem × 25.5rem */

export const StyledImageContainer = styled.p`

  display: block;
  width: 100%;
  height: 6.375rem;


`

// .image-container img {
//   position: absolute;
//   top: 50%; /* Center vertically */
//   left: 50%; /* Center horizontally */
//   transform: translate(-50%, -50%) scale(1); /* Center and scale */
//   max-width: 100%;
//   max-height: 100%;
// }

// /* Styles for mobile devices */
// @media (max-width: 768px) {
//   .image-container img {
//     transform: translate(-50%, -50%) scale(0.8); /* Center and scale for mobile */
//   }
// }