import React, { Component } from 'react';

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';

import './App.scss';

import profile from './constants/profile';
import careers from './constants/career';
import contacts from './constants/contact';
import avatar from './images/avatar.jpg';
import under_construction from './images/under_construction.gif';

const Header = (props) => {
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
  const links = contacts.map((contact, index) => {
    return (
      <Grid className="contact-link" item xs={12} sm={6} key={index}>
        <a component="a" href={contact.link}>
          <i className={contact.logo + " icon"}></i><span>{contact.text}</span>
        </a>
      </Grid>
    );
  });
  return (
    <div id="contact" className="section section footer">
      <h2>Contact</h2>
      <p className="section-description"></p>
      <hr/>
    
      <Grid container className="section-contents">
        {links}
      </Grid>
    </div>
  );
}

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type : ''
    }
  }

  render() {
    const techs = profile.techs;
    let lhs = [], rhs = [];
    techs.forEach((tech, index) => {
      if (index % 2 !== 0) {
        lhs.push(<div key={index} className="flex flex--item"><i className="fad fa-angle-right icon"></i><span className={tech[this.state.type]? '--bolded': ''}>{tech.name}</span></div>);
      } else {
        rhs.push(<div key={index} className="flex flex--item"><i className="fad fa-angle-right icon"></i><span className={tech[this.state.type]? '--bolded': ''}>{tech.name}</span></div>);
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
            <p>I'm a generalist webapp developer with experience in the backend/frontend/devops and customer facing. However, my passion and skills align primarily with the front end. I love interesting problems and love even more to solve them.
              I believe no matter the skill level, everyone should both mentor and be a mentor to keep improving their skill set.</p>
            <p>Here are some of the technologies I'm currently working with <span className="tech-type" onMouseLeave={() => {this.setState({type:''})}} onMouseEnter={() => {this.setState({type:'professional'})}}>professionally</span> and <span className="tech-type" onMouseLeave={() => {this.setState({type:''})}} onMouseEnter={() => {this.setState({type:'personal'})}}>personally</span>:</p>
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
}

class Experience extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIdx: 0 };
  }

  render() {
    const careersElem = careers.map((job, index) => {
      const key = `c${index}`;
      const isActive = index === this.state.activeIdx;
      return (
        <React.Fragment>
          <ListItem 
            key={key} 
            button
            alignItems="flex-start" 
            onClick={()=>this.setState({activeIdx:index})}
            selected={isActive}
            className={"career-list__list-item" + (isActive ? 'list-item--active' : '')}>
            <ListItemAvatar>
              <Avatar alt={job.company} src={job.logo} />
            </ListItemAvatar>
            <ListItemText
              primary={job.company}
              secondary={
                <React.Fragment>
                  <span className="--block">{job.title}</span>
                  <span>{job.time}</span>
                </React.Fragment>
              }
            />
          </ListItem>
          {index < careers.length && 
            <Divider variant="inset" component="li" />
          }
        </React.Fragment>
      );
    });
  
    const points = careers[this.state.activeIdx].points.map((point, pindex) => {
      const pkey = `p${pindex}`
      return (<li key={pkey} className="career-points-list__point"><span className="fa-li"><i className="fad fa-angle-right"></i></span>{point}</li>);
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
          <div className="flex flex--row">
            <List className="career-list flex--item">
              {careersElem}
            </List>
            <ul className="fa-ul flex--item career-points-list">
              {points}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

const Projects = () => {
  return (
    <div id="projects" className="fullscreen section">
      <h2>Projects</h2>
      <p className="section-description">
        UNDER CONSTRUCTION!!!!!!!!
      </p>
      <hr/>
      <div className="flex flex--column section-contents">
        <div className="flex--item" style={{margin:"auto"}}>
          <img src={under_construction}></img>
        </div>
        <div className="flex--item" style={{"font-size":"2.5em", "margin-top":"2em"}}>
          <marquee behavior="scroll" direction="left">Under Construction....</marquee>
        </div>
      </div>
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
