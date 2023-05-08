import React from 'react';
import '../src/styles/globals.scss';
import {Header} from './components/header/Header';
import Main from './components/mainCard/mainCard';
import Artists from '../src/components/artistGrid/ArtistGrid';
import { SaleModule } from '../src/components/salesBlocks/SaleModule';
import Footer from './components/footer/footer';
import {
  BrowserRouter,
  Routes, // instead of "Switch"
  Route,
} from "react-router-dom";

import CopyRight  from '../src/components/pages/copyright';
import PrivacyPolicy from '../src/components/pages/privacypolicy';
import Contacts  from '../src/components/pages/contacts';
import FAQ from '../src/components/pages/faq';



function App() {
  
  return (
    <BrowserRouter>
      <div className="global.scss container">
      <Header />
        <Routes>
          <Route path="/" element={
            <>
              <Main />
                <Routes>
                  
                </Routes>
              <Artists/>

              <SaleModule />
            </>}/>
          <Route path="/copyright" element={<CopyRight />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;






// function App() {
  

//   return(
    
//     <BrowserRouter >
//       <div className="global.scss, container">
      
       
            
//         <Header />
//         <Main />
//           <Routes>
//             <Route>
              
//             </Route>
//           </Routes>
//         <Artists/>
//         <SaleModule /> 

//         <Footer/>
//           <Routes >
//             <Route path="/copyright" element={<CopyRight />} />
//             <Route path="/privacypolicy" element={<PrivacyPolicy />} />
//             <Route path="/contacts" element={<Contacts />} />
//             <Route path="/faq" element={<FAQ />} />
//           </Routes>    
              
          
      
//      </div> 
//     </BrowserRouter>
   
//   );
// }

// export default App;