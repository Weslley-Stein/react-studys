import React from 'react';
import style from './App.css';
import Main from './main'
import Footer from './footer'
import Photo from './photo'

export default function App(){
  return (
    <div className="main-container">
      <Photo/>
      <Main/>
      <Footer/>
    </div>
  )
}