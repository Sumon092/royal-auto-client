import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home/Home';
import Inventories from './pages/Home/Inventories/Inventories';
import Header from './pages/Shared/Header/Header';
import Footer from './pages/Shared/Footer/Footer';
import Banner from './pages/Home/Banner/Banner';
import UpdateInventory from './pages/UpdateInventory/UpdateInventory';
import InventoryDetail from './pages/InventoryDetail/InventoryDetail';

function App() {
  return (
    <>

      <Header />

      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/inventory/:id' element={<InventoryDetail />}></Route>
        <Route path='/update/:id' element={<UpdateInventory />}></Route>
      </Routes>
      <Footer />

    </>
  );
}

export default App;
