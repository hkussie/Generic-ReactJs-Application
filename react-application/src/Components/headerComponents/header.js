import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header>

       <div className="logo">
         My logo here:
       </div>

       <nav>
         <ul>
           <li>
             <a href="#">Home</a>
           </li>
           <li>
             <a href="#">About</a>
           </li>
           <li>
             <a href="#">Contact</a>
           </li>
         </ul>
       </nav>

      </header>
    );
  }
}

export default Header;
