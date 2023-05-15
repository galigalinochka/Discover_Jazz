import React from 'react';
import {

  StyledFooter,
  StyledCopyRight,
  StyledPrivacyPolicy,
  StyledContacts,
  StyledSocial,
  StyledFaq,
  StyledSocialElement

} from '../footer/footer.styles'

import facebook from '../../assets/social/Facebook.svg'
import instagram from '../../assets/social/Instagram.svg'
import twitter from '../../assets/social/Twitter.svg'
import youtube from '../../assets/social/Youtube.svg'
import tiktok from '../../assets/social/TikTok.svg'

//import { NavLink } from 'react-router-dom';

const footer = () => {
  return (
    <StyledFooter>


      <StyledCopyRight>
        {/* <NavLink to="/Copyright"> */}
          copyright 2023 blue note festival
        {/* </NavLink>         */}
      </StyledCopyRight>  



      <StyledPrivacyPolicy>
        {/* <NavLink to="/PrivacyPolicy"> */}
          Privacy policy
        {/* </NavLink>  */}
      </StyledPrivacyPolicy>


      <StyledContacts>
        {/* <NavLink to="/Contacts"> */}
          Contacts
        {/* </NavLink> */}
      </StyledContacts>


      <StyledSocial>

        {/* <NavLink to="https://www.facebook.com/"> */}
          <StyledSocialElement>
            <img src={facebook} alt="Facebook" />
          </StyledSocialElement>  
        {/* </NavLink>  */}

        {/* <NavLink to="https://www.instagram.com/"> */}
          <StyledSocialElement>
            <img src={instagram} alt="Instagram" />
          </StyledSocialElement>  
        {/* </NavLink> */}

        {/* <NavLink to="https://twitter.com/"> */}
          <StyledSocialElement>
            <img src={twitter} alt="Twitter" />
          </StyledSocialElement>
        {/* </NavLink> */}

        {/* <NavLink to="https://youtube.com/"> */}
          <StyledSocialElement>
            <img src={youtube} alt="Youtube" />
          </StyledSocialElement> 
        {/* </NavLink> */}

        {/* <NavLink to="https://tiktok.com/"> */}
          <StyledSocialElement>
            <img src={tiktok} alt="Tiktok" />
          </StyledSocialElement>  
        {/* </NavLink> */}

      </StyledSocial>
        
      <StyledFaq>
        {/* <NavLink to="FAQ"> */}
          FAQ
        {/* </NavLink> */}
      </StyledFaq>

    </StyledFooter>
  );
};

export default footer;