import React, { Component } from 'react';
import Link from 'next/link'
import artworks from '../mocks/artwork'

export default class extends Component {
    static async getInitialProps({query}) {
        console.log('hi', query.art);
        const art = artworks.artworks[query.art]
        console.log('art return', art)
        return { art: art }
    }
 render() {
   return (
     <div>
       <h1>This is a art</h1>
       <p>name = {this.props.art.name}</p>
       <img src={this.props.art.imageUrl} />
       Click{' '}
        <Link href="/gallery">
        <a>here</a>
        </Link>{' '}
        to read more
     </div>
   );
 }
}