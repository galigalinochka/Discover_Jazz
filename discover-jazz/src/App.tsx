import React from 'react';
import Header from './components/header/header';
import Main from './components/mainCard/mainCard';
import Artists from './components/artistGrid/artistGrid';
import SaleBlocks from './components/salesBlocks/salesBlocks';
import Footer from './components/footer/footer';


function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <Main />
      <Artists />
      <SaleBlocks />
      <Footer />
    </div>
  );
}

export default App;
