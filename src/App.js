
import './App.css';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Login from './components/Login';
import News from './components/News';
import Menu from './components/Menu';
import Horta from './components/Horta';
function App() {
  var url = window.location.pathname
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="News" element={<News />} />
        <Route path="Horta" element={<Horta />} />
      </Routes>
    </BrowserRouter>
  );
}
// Importar font e possiveis imagens que serao usadas
export default App;
