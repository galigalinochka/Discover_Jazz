import React from 'react';
import '../src/styles/globals.scss';
import {Header} from './components/header/Header';
import Main from './components/mainCard/mainCard';
import Artists from './components/artistGrid/artistGrid';
import SaleBlocks from './components/salesBlocks/salesBlocks';
import Footer from './components/footer/footer';


function App() {
  return (
    <div className="global.scss, container">
      <Header />
      <Main />
      <Artists />
      <SaleBlocks />
      <Footer />
    </div>
  );
}

export default App;