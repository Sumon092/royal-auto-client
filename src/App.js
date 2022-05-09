import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home/Home';
import Inventories from './pages/Home/Inventories/Inventories';
import Header from './pages/Shared/Header/Header';
import Footer from './pages/Shared/Footer/Footer';
import UpdateInventory from './pages/UpdateInventory/UpdateInventory';
import InventoryDetail from './pages/InventoryDetail/InventoryDetail';
import RequiredAuth from './pages/SignIn/RequiredAuth/RequiredAuth';
import SignIn from './pages/SignIn/SignIn/SignIn';
import SignUp from './pages/SignIn/SignUp/SignUp';
import SocialSignIn from './pages/SignIn/SocialSignIn/SocialSignIn';
import ManageInventory from './pages/ManageInventory/ManageInventory';
import InsertQuantity from './pages/InsertQuantity/InsertQuantity';
import AddNewItem from './pages/AddNewItem/AddNewItem';
import NotFound from './pages/NotFound/NotFound';
import Blogs from './pages/Blogs/Blogs';

function App() {
  return (
    <>

      <Header />

      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/inventory/:id' element={
          <RequiredAuth><InventoryDetail />
          </RequiredAuth>}>
        </Route>
        <Route path='/signIn' element={<SignIn />}></Route>
        <Route path='/signUp' element={<SignUp />}></Route>
        <Route path='/socialLogin' element={<SocialSignIn></SocialSignIn>}></Route>
        <Route path='/manageInventory' element={<ManageInventory />}></Route>
        <Route path='/insertQuantity/:id' element={<InsertQuantity />}></Route>
        <Route path='/update/:id' element={<UpdateInventory />}></Route>
        <Route path='/addItem' element={<AddNewItem></AddNewItem>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer />

    </>
  );
}

export default App;
