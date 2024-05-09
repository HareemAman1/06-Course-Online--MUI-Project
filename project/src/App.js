import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom/dist';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Courses from './pages/Courses';
import Error from './pages/Error';
import Register from './pages/Register';

function App() {
  return (
    <div>    
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/courses' element={<Courses />}></Route>
          <Route path='/register' element={<Register />}></Route>
          <Route path='*' element={<Error />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
