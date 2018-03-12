import React, { Component } from 'react';
import Link from 'next/link'
import artworks from '../mocks/artwork'

export default class extends Component {
 static async getInitialProps() {
     return { artworks: artworks.artworks }
 }
 render() {
   return (
     <div>
       <h1>This is a gallery</h1>
       {this.props.artworks.map(art => (
           <div>
               {art.name}
               <img src={art.imageUrl}/>
           </div>
       ))}

       Click{' '}
        <Link href="/">
        <a>here</a>
        </Link>{' '}
        to read more
     </div>
   );
 }
}