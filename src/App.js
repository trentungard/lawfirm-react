import './App.scss'
import Header from './Header/Header';
import { useState, useEffect } from 'react';

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
    </div>
  );
}

export default App;
