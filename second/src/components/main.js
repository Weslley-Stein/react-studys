import React from 'react';
import reactlogo from '../logo.svg';

export default function Main(){
    return (
        <main className="main_component">
            <h1>Fun facts about React</h1>
            <ul className="main_list_component">
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100K stars on Github</li> 
                <li>is maintained by Facebook</li> 
                <li>Powers thousands of enterprise apps, including mobile apps</li>        
            </ul>
        </main>
    )
}