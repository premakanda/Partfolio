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
import typescript from './image/typescript.svg';
import git from './image/git.svg';
import redux from './image/redux.svg';
import react from './image/react-native.svg';
import gulp from './image/gulp.svg';

// import todolistBgImg from './image/totdolist.png';
// import socialnebworkBgImg from './image/sn.png';
// import counterkBgImg from './image/counter.png';
// import pinkBgImg from './image/pink.png';

import Particles from 'react-particles-js';



const particlesOpt = {
    particles: {
        number: {
            value: 100,
            density: {
                enable: true,
                value_area: 600
            }
        },
        move: {
            radius: 100
        }
    }
};

const todolistImg = {
    backgroundImage: 'url(todolistBgImg)'
};
const socialnebworkImg = {
    backgroundImage: 'url(${socialnebworkBgImg})'
};
const counterImg = {
    backgroundImage: 'url({counterkBgImg})'
};
const pinkImg = {
    backgroundImage: 'url({pinkBgImg})'
};

class App extends React.Component {
    state = {
        tasks: [
            {subtittle: 'HTML', img: html},
            {subtittle: 'CSS', img: css},
            {subtittle: 'JS', img: js},
            {subtittle: 'TYPESCRIPT', img: typescript},
            {subtittle: 'React', img: react},
            {subtittle: 'Redux', img: redux},
            {subtittle: 'GIT', img: git},
            {subtittle: 'Gulp', img: gulp}
        ],
        project: [
            {title: 'TODOLIST', text:'React, Redux, typescript', style: todolistImg},
            {title: 'Socialnetwork', text:'React, Redux, redux-form, redux-thunk, React hooks, HOC, axios, hookrouter, react-paginate', style: socialnebworkImg},
            {title: 'Counter', text:'React, Redux', style: counterImg},
            {title: 'Pink', text:' HTML, CSS, Less, JS, Flexbox, BEM, Gulp, Git', style: pinkImg},

        ],

    }
    render = () => {
        return (
            <div className="App">
                <Particles className="particles" params={particlesOpt}/>
                <Header/>
                <Main/>
                <Skills element={this.state.tasks}/>
                <Projects element={this.state.project}/>
                <Slogan/>
                <Contacts/>
                <Footer/>
            </div>
        );
    }
}

export default App;
