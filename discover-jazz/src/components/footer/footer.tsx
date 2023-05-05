import React from 'react';
import {

  StyledFooter,
  StyledCopyRight,
  StyledPrivacyPolicy,
  StyledContacts,
  StyledSocial,
  StyledFaq,
  StyledSocialElement,
  StyledNavLink
} from '../footer/footer.styles'

import facebook from '../../assets/social/Facebook.svg'
import instagram from '../../assets/social/Instagram.svg'
import twitter from '../../assets/social/Twitter.svg'
import youtube from '../../assets/social/Youtube.svg'
import tiktok from '../../assets/social/TikTok.svg'

// import { NavLink } from 'react-router-dom';
// import { BrowserRouter as Router } from 'react-router-dom';

// import CopyRight  from '../pages/copyright'
// import PrivacyPolicy from '../pages/privacypolicy'
// import Contacts  from '../pages/contacts'
// import FAQ from '../pages/faq'


const Footer = () => {
  return (

        
      <StyledFooter>
      

        <StyledCopyRight>
          <StyledNavLink to="/copyright">
            copyright 2023 blue note festival
          </StyledNavLink>        
        </StyledCopyRight>  



        <StyledPrivacyPolicy>
          <StyledNavLink to="/privacypolicy">
            Privacy policy
          </StyledNavLink> 
        </StyledPrivacyPolicy>


        <StyledContacts>
          <StyledNavLink to="/contacts" >
            Contacts
          </StyledNavLink>
        </StyledContacts>


        <StyledSocial>

          <StyledNavLink to="https://www.facebook.com/" >
            <StyledSocialElement>
              <img src={facebook} alt="Facebook" />
            </StyledSocialElement>  
          </StyledNavLink> 

          <StyledNavLink to="https://www.instagram.com/" >
            <StyledSocialElement>
              <img src={instagram} alt="Instagram" />
            </StyledSocialElement>  
          </StyledNavLink>

          <StyledNavLink to="https://twitter.com/" >
            <StyledSocialElement>
              <img src={twitter} alt="Twitter" />
            </StyledSocialElement>
          </StyledNavLink>

          <StyledNavLink to="https://youtube.com/" >
            <StyledSocialElement>
              <img src={youtube} alt="Youtube" />
            </StyledSocialElement> 
          </StyledNavLink>

          <StyledNavLink to="https://tiktok.com/" >
            <StyledSocialElement>
              <img src={tiktok} alt="Tiktok" />
            </StyledSocialElement>  
          </StyledNavLink>

        </StyledSocial> 
          
        <StyledFaq>
          <StyledNavLink to="faq" >
            FAQ
          </StyledNavLink>
        </StyledFaq>

      
      </StyledFooter>
    
  );
};

export default Footer;