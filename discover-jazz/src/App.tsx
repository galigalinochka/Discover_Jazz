import React from 'react';
import '../src/styles/globals.scss';
import {Header} from './components/header/Header';
import Main from './components/mainCard/mainCard';
import LineUp from '../src/components/LineUp/LineUp';
import { SaleModule } from '../src/components/salesBlocks/SaleModule';
import Footer from './components/footer/footer';
//import { ISelectOption } from "./types/types";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";



function App() {
 /* const [selectedOption, setSelectedOption] = React.useState({ value: 'ALL', label: 'ALL' });

  const handleSortChange = (selectedOption: ISelectOption) => {
    setSelectedOption(selectedOption);
  }*/
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
    <BrowserRouter>
      <div className="global.scss, container">
        <Header />
        <Routes>
          <Route path = "/" element = {
            <>
            <Main />
            <SaleModule /> 
            </>
          }/>
          <Route path = "/lineup" element = {<LineUp />} />
        </Routes>    
        <Footer />

      </div>
    </BrowserRouter>
  );
}

export default App;