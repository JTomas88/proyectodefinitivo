import logo from './logo.svg';
import './App.css';
import Contenido from './components/contenido/Contenido';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Info from'./components/info/Info';
import Registro from './components/registro/Registro';

function Home() {
  return (
    <div className='container-fluid'>
      {/* /* Header */}
      <Header />


{/* 
      {/* Contenido*/}
      <Contenido />


      {/* Footer */}
      <Footer /> 

    </div>

  );
}

export default Home;
