import './css/app.css';
import Home from './pages/Home';
import Menu from './components/Menu';
import TechnoAdd from './pages/TechnoAdd';
import TechnoList from './pages/TechnoList';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';

function App() {
  const [technos, setTechnos] = useState([]);

  function handleAddTechno(techno) {
    setTechnos([...technos, techno]);
  }
  return (
    <>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<TechnoAdd handleAddTechno={handleAddTechno} hello='world' />} />
        <Route path="/list" element={<TechnoList technos={technos} />} />
      </Routes>

    </>
  );
}

export default App;
