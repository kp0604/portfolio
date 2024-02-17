import './App.css';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Project from './pages/Project';
import Experiences from './pages/Experiences';
import Header from './pages/Header';
import About from './pages/About';
import {Box,Paper} from '@mui/material';
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <Box  px={{xs:2,md:4}} py={{xs:2,md:4}}>
    <Header/>
    <Paper elevation={8} sx={{ borderRadius: 1,py:2,minHeight:'70vh'}} >
    <Routes>
    <Route path='/' element={<Home/>}/>
    {/* <Route path='/about' element={<About/>}/> */}
    <Route path='/projects' element={<Projects/>}/>
    <Route path='/projects/:name' element={<Project/>}/>
    <Route path='/experiences' element={<Experiences/>}/>
      </Routes>
    </Paper>
    </Box>
    </BrowserRouter>
  );
}
export default App;
