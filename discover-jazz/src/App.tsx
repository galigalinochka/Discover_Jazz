import React from 'react';
import '../src/styles/globals.scss';
import {Header} from './components/header/Header';
import Main from './components/mainCard/mainCard';
import Artists from './components/artistGrid/artists';
import { SaleModule } from '../src/components/salesBlocks/SaleModule';
import Footer from './components/footer/footer';


function App() {
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