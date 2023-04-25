import styled, { css, keyframes } from "styled-components";


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

    & div {

        display: inline-block;
        text-align: right;
        font-weight: 700;
        font-size: 36px;
        line-height: 44px;
        max-width: 200px;
        padding-right: 24px;
        padding-top: 24px;
        color: #F8F8F8;
        height: auto;        
        text-transform: uppercase;

    }

    
`

export const StyledArtistElementSmall = styled.div`

    display: flex;
    height: 360px;
    width: 360px;
    position: relative;
    justify-content: flex-end;

    & div {

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

    }
    
`


export const StyledHoverMenuSmall = styled.span`

    display: block;
    text-align: left;    
    position: absolute;
    bottom: -100%;
    z-index: 10;
    opacity: 0;
    height: 360px;
    width: 360px;
    background-color: #F8F8F8;
    animation: ${fadeIn} 0.3s ease-in-out 0.3s forwards;
    
    
    
    
    &:focus {
               

    }

    & h1 {

        display: inline-block;
        font-weight: 700;
        font-size: 36px;
        line-height: 44px;
        margin-left: 24px;
        margin-top: 32px;
        margin-bottom: 20px;


    }


    & h2 {
        
        display: inline-block;
        font-weight: 700;
        font-size: 24px;
        line-height: 30px;
        margin-left: 24px;
        margin-top: 20px;          
        margin-bottom: 5px;

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
        margin-left: 24px;
        margin-top: 13px;          
        margin-bottom: 5px;


    }


    & span {

        display: none;
    }

    & div {

        display: inline-block;
        margin: 24px 32px 24px 24px;

    }
` 

export const StyledHoverMenuBig = styled.span`

    display: block;
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

        
        /* ;
        transition-duration: 0.3s;
        transition-timing-function: ease-in-out;
        z-index: 1;
        transition: opacity 0.5s ease-in-out; */

    }

    & h1 {

        display: inline-block;
        font-weight: 700;
        font-size: 36px;
        line-height: 44px;
        margin-left: 24px;
        margin-top: 32px;
        margin-bottom: 34px;

    }


    & h2 {
        
        display: inline-flex;
        font-weight: 700;
        font-size: 24px;
        line-height: 30px;
        margin-left: 24px;
        margin-top: 5px;        
        margin-bottom: 10px;
        
    }


    & h3 {
        
        display: inline-block;
        font-weight: 700;
        font-size: 24px;
        line-height: 30px;              
        
    }

    

    & p {

        display: inline-block;
        font-weight: 700;
        font-size: 16px;
        line-height: 20px;  
        text-decoration: underline;  
        margin-left: 24px;
        margin-top: 0px;
        margin-bottom: 52px;

    }



    & span {

        display: inline-block;
        font-weight: 700;
        font-size: 28px;
        line-height: 32px;   
        margin-left: 247px;     

    }


    & div {

        display: inline-block;
        margin-left: 240px;
        margin-right: 240px;
        margin-bottom: 24px;

    }
` 