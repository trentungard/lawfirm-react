import './App.scss'
import Header from './Header/Header';
import { useState, useEffect } from 'react';
import MainImage from './MainImage';
import About from './About/About';
import Practice from './Practice/Practice';
import Team from './Team/Team';

function App() {

  const [viewWidth, setViewWidth] = useState(0)

  const updateViewWidth = () => {
    const vw = window.innerWidth;
    setViewWidth(vw);
  }

  useEffect( () => {
    updateViewWidth();
  }, [])

  window.addEventListener('resize', updateViewWidth);

  console.log(viewWidth)

  return (
    <div className="App">
      <Header viewWidth={viewWidth} />
      <MainImage />
      <div className="main-container">
        <About />
        <hr />
        <Practice />
        <hr />
        <Team />
      </div>
    </div>
  );
}

export default App;