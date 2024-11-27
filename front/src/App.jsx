import Home from './views/Home/Home'
import './App.css'
import { Routes,Route, useLocation } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import About from './views/About/About';
import Contacto from './views/Contacto/Contacto';
import MisTurnos from './views/MisTurnos/MisTurnos';
import Mosaico from './components/Mosaico/Mosaico';
import Register from './views/Register/Register';
import Login from './views/Login/Login';
import ErrorPage from './components/ErrorPage/ErrorPage';
import MisTurnosId from './views/MisTurnosUsuario/MisTurnosUsuario';



function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Mosaico /> 
              <Home />
            </>
          }
        />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/turnos" element={<MisTurnos />} />
        <Route path="/mis-turnos" element={<MisTurnosId/>} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/about" element={<About />} />
        <Route path='*' element={<ErrorPage/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App;
