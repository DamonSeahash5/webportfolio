import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Projectscontainer from './components/ProjectsContainer.jsx'
import Header from "./components/Header.jsx";
import Experiments from './Experiments.jsx';

function App() {
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
          <Route path="/experiments" element={<Experiments />} />
        </Routes>
      </Router>
    </>
  )
};

export default App;
