import React, { Component } from 'react';

export default class Button extends Component {
 render() {
   return (
     <div>
       text: {this.props.text}
       <p>the href: {this.props.href}</p>
       <p>the id is: {this.props.id}</p>
     </div>
   );
 }
}