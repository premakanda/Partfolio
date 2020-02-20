import React from 'react';
import './App.css';
import Header from './components/Header/Header.jsx';
import Main from './components/Main/Main.jsx';
import Skills from './components/Skills/Skills.jsx';
import Aducation from './components/Aducation/Aducation.jsx';
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

import html1 from './image/HTML&CSS-1-ru.png';
import html2 from './image/HTML&CSS-2-ru.png';
import js1 from './image/JS-1-en.png';
import wr from './image/Сертификат BP.png';
import wrjs from './image/Сертификат JS.png';

import todolistBgImg from './image/totdolist.png';
import socialnebworkBgImg from './image/sn.png';
import counterkBgImg from './image/counter.png';
import pinkBgImg from './image/pink.jpg';

import Particles from 'react-particles-js';
import AducationItem from "./components/Aducation/Aducation-item/AducationItem";



const particlesOpt = {
    particles: {
        number: {
            value: 100,
            density: {
                enable: true,
                value_area: 500
            }
        },
        color: {
            value: '#fff'
        },
        // shape: {
        //     type: 'circle',
        //     stroke: {
        //         width: 1,
        //         color: 'coral'
        //     }
        // },
        opacity: {
            value: 0.5,
            random: true,
            anim: {
                enable: false,
                speed: 1
            }
        },
        size: {
            value: 3,
            random: false,
            anim: {
                enable: false,
                speed: 40
            }
        },
        line_linked: {
            enable: true,
            distance: 120,
            color: '#fff',
            width: 1
        },
        move: {
            enable: true,
            speed: 2,
            direction: 'none',
            straight: false
        }
    },
    interactivity: {
        events: {
            onhover: {
                enable: true,
                mode: 'repulse'
            },
            onclick: {
                enable: true,
                mode: 'push'
            }
        },
        modes: {
            repulse: {
                distance: 50,
                duration: 0.4
            },
            bubble: {
                distance: 100,
                size: 10
            }
        }
    }
};







const todolistImg = {
    backgroundImage: 'url(' + todolistBgImg + ')'
};
const socialnebworkImg = {
    backgroundImage: 'url(' + socialnebworkBgImg + ')'
};
const counterImg = {
    backgroundImage: 'url(' + counterkBgImg + ')'
};
const pinkImg = {
    backgroundImage: 'url(' + pinkBgImg + ')'
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
            {title: 'TODOLIST', text:'React, redux, react-redux, redux-thunk, typescript, axios, HOC', style: todolistImg},
            {title: 'Socialnetwork', text:'React, redux, react-redux, redux-thunk, redux-form, hooks, axios, HOC', style: socialnebworkImg},
            {title: 'Counter', text:'React, redux, react-redux', style: counterImg},
            {title: 'Pink', text:' HTML, CSS, Less, JS, Flexbox, BEM, Gulp, Git', style: pinkImg},

        ],
        certificate: [
            {img: html1},
            {img: html2},
            {img: js1},
            {img: wr},
            {img: wrjs}
        ]

    }
    render = () => {
        return (
            <div className="App">
                <Particles className="particles" params={particlesOpt}/>
                <Header/>
                <Main/>
                <Skills element={this.state.tasks}/>
                <Aducation element={this.state.certificate}/>
                <Projects element={this.state.project}/>
                {/*<Slogan/>*/}
                <Contacts/>
                <Footer/>
            </div>
        );
    }
}

export default App;
