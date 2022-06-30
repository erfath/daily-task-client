import logo from './logo.svg';
import './App.css';
import Navbar from './Pages/Navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import CompletedTask from './Pages/Home/CompletedTask';
import ToDo from './Pages/Home/ToDo';
import Calander from './Pages/Home/Calander';
import Home from './Pages/Home/Home';
import Footer from './Pages/Footer/Footer';
function App() {
  return (
    <div>
     <Navbar></Navbar>
     <Routes>
      <Route path='/' element={<ToDo></ToDo>}></Route>
      <Route path='todo' element={<ToDo></ToDo>}></Route>
      <Route path='completed' element={<CompletedTask></CompletedTask>}></Route>
      <Route path='calander' element={<Calander></Calander>}></Route>
     </Routes>
     
    </div>
  );
}

export default App;
