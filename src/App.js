import React from 'react';
import {
  BrowserRouter as Router, 
  // eslint-disable-next-line
  Switch, 
  Route, 
  Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './App.css';

import Footer from './components/Footer';
import PortfolioPage from './pages/PortfolioPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: 'Karen',
      headerLinks: [
        { title: 'Home', path: '/' },
        { title: 'About', path: '/about' },
        { title: 'Contact', path: '/contact' }
      ],
      home: {
        title: 'Project Time',
        subTitle: 'Projects created during SMU Bootcamp',
        text: 'Checkout my projects below'
      },

      about: {
        title: 'About Me',
        subTitle: 'Hello, my name is Karen',
        text: 'Here is a little bit of information about me as well as my social media links'
      },

      contact: {
        title: 'Let\'s Connect',
        subTitle: ''
      }
    }
  }

  render() {
    return (
      <Router>
        <Container className="p-0" fluid={true}>

        <Navbar className="border-bottom" bg="transparent" expand="lg">
          <Navbar.Brand>Karen Acosta </Navbar.Brand>

        <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
          <Navbar.Collapse id="navbar-toggle">
            <Nav className="ml-auto">
              <Link className="nav-link" to="/">Portfolio</Link>
              <Link className="nav-link" to="/about">About</Link>
              <Link className="nav-link" to="/contact">Contact</Link>
            </Nav>
            </Navbar.Collapse>
            </Navbar>

            <Route path="/" exact render={() => <PortfolioPage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text} />} />
            <Route path="/about" render={() => <AboutPage title={this.state.about.title} subTitle={this.state.about.subTitle} text={this.state.about.text} />} />
            <Route path="/contact" render={() => <ContactPage title={this.state.contact.title} subTitle={this.state.contact.subTitle} text={this.state.contact.text} />} /> 

            <Footer />

          </Container>
        </Router>
      );
    }
  }

  

export default App;
