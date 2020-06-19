import React from 'react';
import {useSelector} from 'react-redux'
import './App.css';
import { Header } from './components/Header';
import { Intro } from './components/Intro';


function App() {
  const {
    logged= false,
    username= null,
    email= null,
    message= null,
    loading= true
  } : any = useSelector((state : any) => state.auth)
  return (
    <div className="App">
      <Header />
      <Intro />
      <Intro text='texto para intro2'/>
    </div>
  );
}

export default App;
