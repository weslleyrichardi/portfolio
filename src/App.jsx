'use client';
import InfinityLIst from './app/home/inicialBanner/InfinityList';
import Header from './app/home/inicialBanner/Header';
import Projects from './app/home/projects/Projects';
import './App.css';
import "/Moon.png";
import InitialBanner from './app/home/inicialBanner/InitialBanner';

function App() {

  return (
     <body>
        <InitialBanner></InitialBanner>
        <div class='line'></div>
          <InfinityLIst></InfinityLIst>
        <div class='line'></div>
        <Projects></Projects>
     </body>
    
  )
}

export default App
