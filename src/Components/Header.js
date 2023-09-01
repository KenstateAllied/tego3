

import React, { Component } from 'react';


class Header extends Component {
  render() {
    if (this.props.data) {
      var name = this.props.data.name;
      var occupation = this.props.data.occupation;
      var description = this.props.data.description;
      var city = this.props.data.address.city;
      var networking = this.props.data.social.map(function (networking) {
        return <li key={networking.name}><a href={networking.url}><i className={networking.className}></i></a></li>
      });
    }
    return (
      <header id="home">
        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
          <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
          <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            <li><a className="smoothscroll" href="#about">OUR COMPANY</a></li>
            <li><a className="smoothscroll" href="#resume">SPECIALIZATIONS</a></li>
            <li><a className="smoothscroll" href="#portfolio">EXPERTISE</a></li>
            <li><a className="smoothscroll" href="#testimonials">SYSTEMS</a></li>
            <li><a className="smoothscroll" href="#contact">CONTACTS</a></li>
          </ul>








        </nav>





        <div className="row banner">

          
          <div className="banner-text">
            
          

            <h1 className="responsive-headline">{name}.</h1>
        
        

            <h3>We are an  {city} based <span>{occupation}</span> {description}</h3>
            <hr />
            <ul className="social">
              {networking}
            </ul>
          </div>
          
          
        <nav>

<div>

<img src='/sat1.jpg' alt='tego_logo.jpg' /></div>

</nav>


        </div>
        <p className="scrolldown">
          <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
        </p>

      </header>  
    );   
  }  
}


export default Header;






