import React from 'react';
import email from './icons8-nova-mensagem-48.png'
import linkedin from './Vector.svg'
import styles from './main.css'

export default function Main(){
    return (
        <main>
            <div className="main-container--sc">
                    <div className="main-container--introduction">
                        <h2>Weslley Fernandes</h2>
                        <h4>Devops Engineer</h4>
                        <p><small>https://github.com/weslley-stein</small></p>
                    </div>

                    <div className="main-container--contact">
                        <button className="main-container--emailbtn">
                            <img src={email}></img>
                            <a>Email</a>
                        </button>
                        <button className="main-container--linkedinbtn">
                            <img src={linkedin}></img>
                            <a>LinkedIn</a>
                        </button>
                </div>
                <div className="main-container--information">
                    <h3>About</h3>
                    <p>
                        I'm 19 years old engineer whos live in São Paulo and work as an intern 
                        and i'm also a high school student. 
                    </p>
                    <h3>Interests</h3>
                    <p>
                        Music, Art, Cooking, Reading, i also appreciate nature and coffee
                    </p>
                </div>
            </div>
        </main>
    )
}