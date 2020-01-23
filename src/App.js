import React from 'react';
import './App.css';
import Header from './components/Header/Header.jsx';
import Main from './components/Main/Main.jsx';
import Skills from './components/Skills/Skills.jsx';
import Projects from './components/Projects/Projects.jsx';
import Slogan from './components/Slogan/Slogan';
import Contacts from './components/Contacts/Contacts';
import Footer from './components/Footer/Footer';
import html from './image/html-5.svg';
import css from './image/css3.svg';
import js from './image/js.svg';
import react from './image/react-native.svg';

class App extends React.Component {
    state = {
        tasks: [
            {subtittle: 'HTML', text: 'Описаие скила html', img: html},
            {subtittle: 'CSS', text: 'Описаие скила css', img: css},
            {subtittle: 'JS', text: 'Описаие скила js', img: js},
            {subtittle: 'React', text: 'Описаие скила react', img: react}
        ]
    }
    render = () => {
        return (
            <div className="App">
                <Header/>
                <Main/>
                <Skills element={this.state.tasks}/>
                <Projects/>
                <Slogan/>
                <Contacts/>
                <Footer/>
            </div>
        );
    }
}

export default App;
