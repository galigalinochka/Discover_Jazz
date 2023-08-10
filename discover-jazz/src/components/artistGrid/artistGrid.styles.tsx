import styled, { css, keyframes } from "styled-components";

type StyledHoverMenuBigProps = {
    display: string; 
    flexDirection: string;
}

const fadeIn = keyframes`
  from {
    opacity: 0;
    /* translate: 0; */
  }
  to {    
    opacity: 1;
    /* translate: 100%; */
  }
`;
const pulsate = keyframes `
0% {opacity: 0.1;}
40% {opacity: 1.0;}
60% {opacity: 1.0;}
100% {opacity: 0.1;}
`

export const StyledArtistGrid = styled.section`

    display: flex; 
    max-width: 1440px;
    flex-wrap: wrap;
    flex-direction: row;
`

export const StyledArtistElementBig = styled.div`

    display: flex;
    justify-content: flex-end;
    height: 360px;
    width: 720px;
    position: relative;

    & h4 {
        display: inline-block;
        text-align: right;
        font-weight: 700;
        font-size: 28px;
        line-height: 32px;
        max-width: 500px;
        padding-right: 24px;
        padding-top: 24px;
        color: #F8F8F8;
        height: auto;
        text-transform: uppercase;
        margin-top: 4px;
    }
`
export const StyledArtistElementSmall = styled.div`

    display: flex;
    height: 360px;
    width: 360px;
    position: relative;
    justify-content: flex-end;

    & h4 {
        display: inline-block;
        text-align: right;
        font-weight: 700;
        font-size: 28px;
        line-height: 32px;
        max-width: 200px;
        padding-right: 24px;
        padding-top: 24px;
        color: #F8F8F8;
        height: auto;
        text-transform: uppercase;
        margin-top: 4px;
    }
    
`

export const StyledHoverMenuSmall = styled.div`

    display: flex;
    flex-direction: column;   
    position: absolute;
    bottom: -100%;
    z-index: 10;
    opacity: 0;
    height: 360px;
    width: 360px;
    background-color: #F8F8F8;
    animation: ${fadeIn} 0.5s ease-in-out 0.3s forwards;
    
    &:focus {

    }

    & h1 {
        display: inline-block;
        font-weight: 700;
        font-size: 36px;
        margin-left: 4px;
        margin-top: 10px;
    }

    & h2 {
        
        display: inline-block;
        font-weight: 700;
        font-size: 24px;
        margin-left: 4px;         
        margin-bottom: 5px;
        margin-top: 14px;
    }

    & h3 {
        
        display: inline-block;
        font-weight: 700;
        font-size: 24px;
        line-height: 30px;        
        margin-top: 20px;          
        margin-bottom: 5px;   
    }

    & p {
        display: inline-block;
        font-weight: 700;
        font-size: 16px;
        text-decoration: underline; 
        line-height: 20px;         
        margin-left: 4px;
        margin-top: 13px;          
        margin-bottom: 5px;
        cursor: pointer;
    }

    & span {
        display: none;
    }

   

    & div {

        display: inline-block;
        margin: 24px 32px 24px 24px;
    }
    & button {
        justify-self: center;
        align-self: center;
    }
` 


export const StyledHoverMenuBig = styled.div`

    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
    position: absolute;
    bottom: -100%;
    z-index: 10;
    opacity: 0;
    height: 360px;
    width: 720px;
    text-align: left;
    background-color: #F8F8F8;
    animation: ${fadeIn} 0.3s ease-in-out 0.3s forwards;
    
    &:focus {

        transition-duration: 0.3s;
        transition-timing-function: ease-in-out;
        z-index: 1;
        transition: opacity 0.5s ease-in-out;
    }

    & h1 {
        display: inline-block;
        font-weight: 700;
        font-size: 36px;
        line-height: 44px;
        margin-left: 24px;
        margin-top: 32px;
        margin-bottom: 40px;
    }

    & h2 {
        display: inline-flex;
        font-weight: 700;
        font-size: 24px;
        line-height: 30px;
        margin-left: 24px;
        margin-top: 5px;        
        margin-bottom: 6px;
    }

    & h3 {        
        display: flex;
        grid-column-start: 3;
        grid-column-end: 5;
        grid-row-start: 1;
        grid-row-end: 1;
        font-weight: 700;
        font-size: 24px;
        line-height: 30px; 
        justify-content: center;
        font-size: 24px;
        align-items: center;   
    }

    & p {
        display: inline-block;
        font-weight: 700;
        font-size: 16px;
        line-height: 20px;  
        text-decoration: underline;  
        margin-left: 24px;
        margin-top: 12px;
        margin-bottom: 28px;
        cursor: pointer;
    }

    & span {
        display: inline-flex;
        font-weight: 700;
        font-size: 28px;
        line-height: 32px;   
        margin-top: 76px;  
        align-items: center;  
        cursor: pointer;
    }

    & span::before {
        display: inline-flex;
        content: "";
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: rgb(67, 69, 74);
        margin-right: 8px;
        opacity: 0.0;
        -webkit-animation: ${pulsate} 1000ms ease-out;
        -webkit-animation-iteration-count: infinite; 
        -webkit-transition: background-color 300ms linear;
    }
    
    & div {
        display: flex;
        flex-direction: column;
        grid-column-start: 1;
        grid-column-end: 3;
        grid-row-start: 1;
        grid-row-end: 1;
    } 
    & button {
        justify-self: center;
        align-self: center;
        grid-column-start: 2;
        grid-column-end: 4;
        grid-row-start: 2;
        grid-row-end: 2;
    }

`;

export const Button = styled.button`
    border: none;
    color: #1A18CA;
    height: 3.9rem;
    width: 22.5rem;
    background-color: #BEC5FF;
    margin: 0 auto;
    font-size: 1.4rem;
    line-height: 1.5rem;
    text-transform: uppercase;
    cursor: pointer;

    &:hover {
        background-color: black;
        color: white;
      }
`
