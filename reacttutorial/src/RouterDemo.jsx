import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link,Switch } from "react-router-dom";

class RouterDemo extends Component{  

  render(){
   
    return(
      <div>
      <h1>RouterDemo Component</h1>
      <Router>
          <div>
              <Header/>            
              <CustomRoute/>
          </div>
      </Router>
      </div>
    );
  }
}

function Header(){
    return(
        <>
        <ul>
        <li><Link to="/">Home</Link> </li>
        <li><Link to="/about">About</Link> </li>
        <li><Link to="/services">Services</Link> </li>
        <li><Link to="/contact">Contact Us</Link> </li>

        </ul>
        </>
    )
}

function CustomRoute(){
    return(
        <>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/services" component={Services} />
              <Route path="/contact" component={Contact} />
              <Route component={PageNotFound}/>
            </Switch>
        </>
    )
}

function Home(){
    return(
        <>
        <h1>Home</h1>
        <p>This is Home page</p>
        </>
    );
}

function About(){
    return(
        <>
        <h1>About Us</h1>
        <p>This is about us page</p>
        </>
    );
}

function Services(){
    return(
        <>
        <h1>Services</h1>
        <p>This is Services page</p>
        </>
    );
}
function Contact(){
    return(
        <>
        <h1>Contact Us</h1>
        <p>This is Contact us page</p>
        </>
    );
}
function PageNotFound(){
    return(
        <>
        <h1>404 Error</h1>
        <p>Page not found</p>
        </>
    );
}

export default RouterDemo;
