import React from 'react';
import NavBar from './components/NavBar';
import Header from './components/Header';
import ContactBar from './components/ContactBar';
import ServicesGallery from './components/ServicesGallery';

// import ContactBar from '.components/ContactBar';
import './styles/normalize.css';
import './styles/fonts.css';
function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <ContactBar />
      <ServicesGallery />
    </div>
  );
}

export default App;
