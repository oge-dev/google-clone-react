import React from 'react';
// Importing Header, MainSection, and Footer components
import Header from './components/header/header';
import MainSection from './components/mainSection/MainSection';
import Footer from './components/footer/footer';
// Importing App.css for styling
import './App.css';

// App component definition
const App = () => {
  return (
    // App component rendering the Header, MainSection, and Footer components
    <div className="app">
      <Header />
      <MainSection />
      <Footer />
    </div>
  );
};

// Exporting the App component as the default export
export default App;
