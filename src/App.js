import logo from './logo.svg';
import './App.css';
import NavbarPrincipal from './components/Navbar';
import BannerPrincipal from './components/Banner';
import InformacionPrincipal from './components/Informacion';
import CotizadorPrincipal from './components/Cotizador';
import FooterPrincipal from './components/Footer';
import React from 'react';


function App() {
  return (
    <div className="App">
      <div>
        <NavbarPrincipal />
        <BannerPrincipal/>
        <InformacionPrincipal/>
        <CotizadorPrincipal/>
        <FooterPrincipal/>
      </div>
    </div>
  );
}

export default App;
