import React from 'react';
import './App.css';
import Header from './components/Header/Header.jsx';
import Main from './components/Main/Main.jsx';
import Skills from './components/Skills/Skills.jsx';
import Projects from './components/Projects/Projects.jsx';
import Slogan from './components/Slogan/Slogan';
import Contacts from './components/Contacts/Contacts';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Skills />
      <Projects />
      <Slogan />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
