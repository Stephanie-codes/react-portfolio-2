import './App.css';
import React from 'react';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Work from './components/Work';
import Contact from './components/Contact';
import Root from './components/Root';

const router = createBrowserRouter( createRoutesFromElements (
  <Route path='/' element={ <Root/> }>
    <Route path='home' element={ <Home /> } />
    <Route path='about' element={ <About /> } />
    <Route path='work' element={ <Work /> } />
    <Route path='contact' element={ <Contact /> } />  
  </Route>
));

export default function App() {
  return (
    <RouterProvider router={ router } />
  );
}
