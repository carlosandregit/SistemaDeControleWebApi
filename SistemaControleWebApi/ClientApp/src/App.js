import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Home from './pages/Principal';
import Produtos from './pages/Produtos';
import Pedidos from './pages/Pedidos';
import Fornecedores from './pages/Fornecedores';
import NavBar from './components/layout/NavBar';
import Footer from './components/layout/Footer';
import Container from './components/layout/Container';


function App() {
  return ( 
    <>
    <Router>
      <NavBar />
        <Container customClass="min-height">          
        <Routes>          
          <Route exact path='/' element={<Home />} /> 
          <Route path='/produtos' element={<Produtos />} />
          <Route path='/fornecedores' element={<Fornecedores />} />
          <Route path='/pedidos' element={<Pedidos />} />
        </Routes>     
       </Container>
       <Footer />
    </Router>  
    </> 
  );
}

export default App;
