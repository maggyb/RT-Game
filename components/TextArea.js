import React, { Component } from 'react';

export default class TextArea extends Component {
 render() {
   return (
     <div>
       {this.props.text}
     </div>
   );
 }
}