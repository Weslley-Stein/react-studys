import React from 'react';
import style from './Nav.css'
import airbnb from '../airbnb.svg';

export default function Nav(){
    return (
        <nav className="nav-component">
            <img src={airbnb}></img>
        </nav>
    );
}