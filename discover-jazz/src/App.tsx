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
import {CopyRight} from '../src/data/Copyright'



function App() {

//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/home/nick/Projects/Jazz/Discover_Jazz/discover-jazz/src/data/Copyright.tsx" Component={CopyRight} />
//         <Route path="/about" Component={About} />
//         <Route path="/contact" Component={Contact} />
//       </Routes>
//     </BrowserRouter>
//   );

//   function Home() {
//     const location = useLocation();
//     // ...
//   }
  
//   function About() {
//     // ...
//   }
  
//   function Contact() {
//     // ...
//   }

  return (
    <div className="global.scss, container">
      <Header />
      <Main />
      <Artists/>
      <SaleModule />      
      <Footer />
    </div>
  );
}

export default App;