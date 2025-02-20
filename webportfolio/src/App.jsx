import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Projectscontainer from './components/ProjectsContainer.jsx'
import Header from "./components/Header.jsx";
import Experiments from './Experiments.jsx';

function App() {
  const [activeImage, setActiveImage] = useState(false);
  function handleImageClick() {
    //controls the state change when /Experiments image is clicked
    //toggles the state by change
    setActiveImage(activeImage => !activeImage)
  };

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={
            <>
              <Header />
              <Projectscontainer />
            </>
          } />
          <Route path="/experiments" element={<Experiments isActive={activeImage} onClick={handleImageClick} />} />
        </Routes>
      </Router>
    </>
  )
};

export default App;
