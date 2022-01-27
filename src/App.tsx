import React from 'react';
import {Header} from './layout/Header';
import {Footer} from './layout/Footer';
import {Main} from './layout/Main/Main';
import s from './App.module.css';

function App() {
  return (
    <div className={s.wrapper}>
      <div>
        <Header/>
      </div>
      <div className={s.content}>
        <Main/>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
