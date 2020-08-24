import React from 'react';
import logo from './logo.svg';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import './App.scss';

function Header(props) {
  

  const links = props.links.map((val) => {
    return (<div key={val} className="link" onClick={() => goToSection(val)}>{val}</div>);
  })

  const goToSection = (id) => {
    const header = document.querySelector('.header');
    const anchor = document.querySelector(`#${id}`);
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
      <Toolbar id="back-to-top-anchor" />
    </React.Fragment>
  );
}

function ContactMe() {
  return (
    <div id="Contact">
      This is where you contact me!
    </div>
  );
}

function App() {

  const links = ["Profile", "Experience", "Projects", "Contact"]

  return (
    <React.Fragment>
      <Header links={links}></Header>
      <div id="splash"></div>
      <div id="Profile">
        Profile stuff
      </div>
      <div id="Experience">
        experience
      </div>
      <div id="Projects">
        projects
      </div>
      <ContactMe></ContactMe>
    </React.Fragment>
  );
}

export default App;
