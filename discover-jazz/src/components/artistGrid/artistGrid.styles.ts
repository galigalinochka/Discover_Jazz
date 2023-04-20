import styled, {css} from "styled-components";


export const StyledArtistGrid = styled.section`

    display: grid;
    grid-template-columns: 360px 360px 360px;
    grid-template-rows: auto;
    grid-template-areas: 
    "1 2 3"
    "4 5 6"
    "7 8 9 10";

`

// export const StyledArtistElement = styled.div`

//     display: flex;
    
// `

export const StyledArtistElementBig = styled.div`

    display: flex;
    height: 360px;
    width: 720px;

    & div {

        display: flex;
        font-weight: 700;
        font-size: 36px;
        line-height: 44px;
        max-width: 200px;
        color: #F8F8F8;
        height: auto;
        flex-wrap: nowrap;
        justify-content: flex-end;

    }

    
`

export const StyledArtistElementSmall = styled.div`

    display: flex;
    height: 360px;
    width: 360px;

    & div {

        display: flex;
        font-weight: 700;
        font-size: 28px;
        line-height: 32px;
        max-width: 200px;
        color: #F8F8F8;
        height: auto;
        flex-wrap: wrap;
        justify-content: flex-end;

    }
    
`


export const StyledHoverMenuSmall = styled.span`

    display: block;
    height: 360px;
    width: 360px;
    background-color: #F8F8F8;

    & h1 {

        display: inline-block;
        font-weight: 700;
        font-size: 36px;
        line-height: 44px;
        margin: 24px 32px 111px 20px;


    }


    & h2 {
        
        display: inline-block;
        font-weight: 700;
        font-size: 24px;
        line-height: 30px;
        margin: 24px 20px 167px 5px;

    }


    & h3 {
        
        display: inline-block;
        font-weight: 700;
        font-size: 24px;
        line-height: 30px;
        margin: 24px 20px 196px 5px;
        
        
    }

    

    & p {

        display: inline-block;
        font-weight: 700;
        font-size: 16px;
        text-decoration: underline; 
        line-height: 20px;    
        margin: 24px 13px 164px 20px;


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
    height: 360px;
    width: 720px;
    text-align: left;
    background-color: #F8F8F8;

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