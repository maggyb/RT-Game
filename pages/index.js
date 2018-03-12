import React, { Component } from 'react';
import Link from 'next/link'
import Button from '../components/Button'
import css from "../styles/master.scss"
import myImg from '../media/images/RTlogo.png';


export default class extends Component {
 render() {
   return (
     <div>
       <h1 className={css.h1}>This is a spashscreen</h1>
       <p>All the reports</p>
       <Button text={'Go to gallery'} href={'gogole'} id={'button1'} />
       Click{' '}
        <Link href="/gallery">
        <a>here</a>
        </Link>{' '}
        to read more

        <img src={myImg}/>
     </div>
   );
 }
}