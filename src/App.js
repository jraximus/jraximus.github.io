import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Avatar from '@material-ui/core/Avatar';

import avatar from './images/avatar.jpg'
import './App.scss';

import career from './json/career.json';

function Header(props) {
  

  const links = props.links.map((val) => {
    return (<div key={val} className="link" onClick={() => goToSection(val)}>{val}</div>);
  })

  const goToSection = (id) => {
    const header = document.querySelector('.header');
    const anchor = document.querySelector(`#${id.toLowerCase()}`);
    if (anchor && header) {
      window.scrollTo({top: anchor.offsetTop - header.offsetHeight, behavior: 'smooth'});
    }
  }

  return (
    <React.Fragment>
      <AppBar>
        <Toolbar className="header">
          <div className="name">jr3</div>
          <div className="links">{links}</div>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </React.Fragment>
  );
}

const ContactMe = () => {
  return (
    <div id="contact">
      This is where you contact me!
    </div>
  );
}

const Profile = () => {

  const techs = ['Javascript(ES6+)/Typescript', 'HTML & (S)CSS', 'React', 'Angular', 'Redux', 'Java', 'Node', 'Python', 'Azure', 'Golang']
  let lhs = [], rhs = [];
  techs.forEach((tech, index) => {
    if (index % 2 !== 0) {
      lhs.push(<div className="flex flex--item"><i className="fad fa-angle-right icon"></i>{tech}</div>);
    } else {
      rhs.push(<div className="flex flex--item"><i className="fad fa-angle-right icon"></i>{tech}</div>);
    }
  })

  return (
    <div id="profile" className="fullscreen section">
      <h2>Profile</h2>
      <p className="section-description">I build things for the web.</p>
      <hr/>
      <div className="flex flex--row section-contents">
        <div className="flex flex--item">
          <Avatar alt="James Rac" src={avatar} className="avatar flex flex--centered"/>
        </div>
        
        <div className="flex profile-text flex--item">
          <p>Hi I'm James! Yes, those are my dogs, cute aren't they? :)</p>
          <p>I'm a generalist webapp developer. I'm a senior programmer with skills that emphasize the front end. I love interesting problems and love even more to solve them.
             I believe no matter the skill level, everyone should both mentor and be a mentor to keep improving their skill set.</p>
          <p>Here are some of the technologies I'm currently working with professionally and personally:</p>
          <div className="flex flex--row">
            <div className="flex flex--item flex--column">
              {lhs}
            </div>
            <div className="flex flex--item flex--column">
              {rhs}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const Experience = () => {
  const careers = career.map((job, index) => {
    const key = `c${index}`
    const points = job.points.map((point, pindex) => {
      const pkey = `${key}_p${pindex}`
      return (<li key={pkey}><span className="fa-li"><i className="fad fa-angle-right"></i></span>{point}</li>);
    });

    return (
      <div className="flex--item" key={key}>
        <div className="">{job.company}, {job.title}</div> 
        <ul className="fa-ul">
          {points}
        </ul>
      </div>
    );
  });

  return (
    <div id="experience" className="fullscreen section">
      <h2>Experience</h2>
      <p className="section-description">
        "Adapt what is useful, reject what is useless, and add what is specifically your own."
        <br/>- Bruce Lee
      </p>
      <hr/>
      <div className="flex flex--column section-contents">
        {careers}
      </div>
    </div>
    );
}

const Projects = () => {
  return (
    <div id="projects" className="fullscreen section">
      <h2>Projects</h2>
      <p className="section-description">
        Here's a subdescription
      </p>
      <hr/>
    </div>
  )
}

const Splash = () => {
  return (
    <div className="splash fullscreen">
      <div className="welcome-text">Welcome!</div>
    </div>
  );
}

function App() {
  const links = ["Profile", "Experience", "Projects", "Contact"]

  const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#171717',
      }
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Header links={links}></Header>
      <Splash></Splash>
      <Profile></Profile>
      <Experience></Experience>
      <Projects></Projects>
      <ContactMe></ContactMe>
    </ThemeProvider>
  );
}

export default App;
