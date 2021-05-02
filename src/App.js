import './mediaqueries.scss';
import './App.scss';
import Header from './Header/Header';
import { useState, useEffect } from 'react';
import MainImage from './MainImage';
import About from './About/About';
import Practice from './Practice/Practice';
import Team from './Team/Team';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';

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

  console.log('HELLO! The errors regarding using unsafe componentWillReceiveProps and componentDidUpdate are from the react library for using the Google Maps API. These are not errors I created.')
  console.log('By the way, I am job hunting! Feel free to visit my website to view my resume or to find my contact information. www.trentungard.com')

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
        <hr />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
