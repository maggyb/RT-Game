import React, { Component } from 'react';
import Link from 'next/link'
import Button from '../components/Button'
import css from "../styles/master.scss"

export default class extends Component {
 render() {
   return (
     <div>
       <h1 className={css.h1}>This is feedback</h1>
       <p>All the reports</p>
       <Button text={'Go to gallery'} />
       Click{' '}
        <Link href="/gallery">
        <a>here</a>
        </Link>{' '}
        to read more
     </div>
   );
 }
}