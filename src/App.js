import './App.css';
import Home from './components/Home';
import Projects from './components/Projects';
import Project from './components/Project';
import Experiences from './components/Experiences';
import Header from './components/Header';
import About from './components/About';
import {Box,Paper} from '@mui/material';
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <Box  p={{xs:2,md:4}}>
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
