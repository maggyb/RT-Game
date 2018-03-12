import React, { Component } from 'react';

export default class Canvas extends Component {
 render() {
   return (
     <div>
       {this.props.text}
     </div>
   );
 }
}