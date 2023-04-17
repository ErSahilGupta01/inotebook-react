import './App.css';
import {
  
  Routes,
  Route
} from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Navbar from './components/Navbar';
import {Alert}  from './components/Alert';
import {Home}  from './components/Home';
import About from './components/About';
import NoteState from './context/notes/NoteState';
import Signup from './components/Signup';
import Login from './components/Login';

function App() {
  return (
    <>
    <NoteState>
      <BrowserRouter>
        <Navbar /> 
        <Alert message="Hello Sahil"/>
        <Routes>
          <Route exact path="/" element={<Home />}>
            
          </Route>
          <Route exact path="/about" element={<About/>}>
            
          </Route> 
          <Route exact path="/login" element={<Login/>}>
            
          </Route> 
          <Route exact path="/signup" element={<Signup/>}>
            
          </Route> 
        </Routes>
      </BrowserRouter>
    </NoteState>
    </>
  );
}

export default App;