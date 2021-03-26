import './App.scss'
import Header from './Header/Header';
import { useState, useEffect } from 'react';
import MainImage from './MainImage';

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
        <h2>About Us</h2>
        <p>
        Callahan Lovecchio is a small local law firm dedicated to advocating and representing our clients in multiple areas of the law. Our Partners, Associates, and Staff all have their roots in this area and the energy and experience to obtain the best possible results for our clients.
        </p>
        <h2>Areas of Practice</h2>
        
      </div>
    </div>
  );
}

export default App;
