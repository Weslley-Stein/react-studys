import React from 'react';
import reactlogo  from '../logo.svg';

export default function Header(){
    return (
        <header className="header_component">
            <div className="header_fc">
                <img src={reactlogo} width="100px"></img>
                <h1>ReactFacts</h1>
            </div>
            <div className="header_sc">
                <h2>React Course - Project 1</h2>
            </div>
        </header>
    )
}