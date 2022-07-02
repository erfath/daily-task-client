import './App.css';
import Navbar from './Pages/Navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import ToDo from './Pages/Home/ToDo';
import Calander from './Pages/Home/Calander';
import Footer from './Pages/Footer/Footer';
import { ToastContainer } from 'react-toastify';
import CompletedTasksUi from './Pages/Home/CompletedTasksUi';
import Contact from './Pages/Home/Contact';
function App() {
  return (
    <div>
     <Navbar></Navbar>
     <Routes>
      <Route path='/' element={<ToDo></ToDo>}></Route>
      <Route path='todo' element={<ToDo></ToDo>}></Route>
      <Route path='completed' element={<CompletedTasksUi></CompletedTasksUi>}></Route>
      <Route path='calander' element={<Calander></Calander>}></Route>
      <Route path='contact' element={<Contact></Contact>}></Route>
     </Routes>
     <Footer></Footer>
     <ToastContainer/>
    </div>
  );
}

export default App;
