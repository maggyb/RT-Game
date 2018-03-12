import React, { Component } from 'react';

export default class Header extends Component {
 render() {
   return (
    <div class="header text-white bg-red">
        <h1 class="header_text">{this.props.title}</h1>
    </div> 
   );
 }
}