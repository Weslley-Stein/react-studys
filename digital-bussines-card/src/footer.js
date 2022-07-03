import React from 'react';
import styles from './footer.css'
import facebook from './facebook.svg'
import github from './github.svg'
import twitter from './twitter.svg'
import instagram from './insta.svg'

export default function Footer() {
    return (
        
        <div className="main-container--tc">
            <a>
                <img src={twitter}></img>
            </a>
            <a>
                <img src={facebook}></img>
            </a>
            <a>
                <img src={instagram}></img>
            </a>
            <a>
                <img src={github}></img>
            </a>
        </div>
    )
}