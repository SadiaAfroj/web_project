import Navbar from './Navbar';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Category from './Category';
import Category2 from './Category2';

function App() {
  return (

    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route index = {true} element = {<Category/>}/>
    <Route path="/:foodie" element={<Category2/>}/>
    </Routes>
    </BrowserRouter>

  );
}

export default App;
