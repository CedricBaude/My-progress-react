import './css/app.css';
import Home from './pages/Home';
import Menu from './components/Menu';
import TechnoAdd from './pages/TechnoAdd';
import TechnoList from './pages/TechnoList';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [technos, setTechnos] = useState([]);

  function handleAddTechno(techno) {
    setTechnos([...technos, { ...techno, technoid: uuidv4() }]);
  }

  function handleDeleteTechno(id){
setTechnos(technos.filter((tech => tech.technoid !== id)))
  }

  return (
    <>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<TechnoAdd handleAddTechno={handleAddTechno} hello='world' />} />
        <Route path="/list" element={<TechnoList technos={technos} handleDeleteTechno={handleDeleteTechno} />} />
      </Routes>

    </>
  );
}

export default App;
