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

function Services({match,location,history}){

    // console.log(match);
    // console.log(location);
    // console.log(history);

    return(
        <>
        <h1>Services</h1>
        <p>This is Services page</p>        
        <ul>
        <li><Link to={`${match.path}/website-designing`}>Website Designing</Link></li>
        <li><Link to={`${match.path}/website-development`}>Website Development</Link> </li>
        <li><Link to={`${match.path}/seo-services`}>SEO Services</Link> </li>
        <li><Link to={`${match.path}/mobile-app-development`}>Mobile App Development</Link> </li>
       </ul>

    <Switch>
        <Route path={`${match.path}/:slug`} component={Subservice} />
    </Switch>

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

/*
function Subservice({match}){
    if(match.params.slug==='website-designing')
    {
    return(
        <>
        <h1>Subservice Details</h1>
        <p>Dinesh Wagh</p>
        </>
    );
    }
    else
    {
        return(
            <>
            <h1>Subservice Details</h1>
            <p>Service Name : {match.params.slug}</p>
            </>
        );
    }

}
*/
class Subservice extends Component{

    render(){

        const {match,location,history}=this.props;

    if(match.params.slug==='website-designing')
    {
    return(
        <>
        <h1>Subservice Details</h1>
        <p>Dinesh Wagh</p>
        </>
    );
    }    
    else
    {
        return(
            <>
            <h1>Subservice Details</h1>
            <p>Service Name : {match.params.slug}</p>
            </>
        );
    }
}


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
