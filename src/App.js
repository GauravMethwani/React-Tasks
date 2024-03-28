import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Router components
import Task from './Screen/Task'; // Import the Task component
import NumberCounter from './Screen/NumberCounter'; // Import the NumberCounter component
import NavigationBar from './Componets/NavigationBar';
import SearchFilter from './Screen/SearchFilter';
import Home from './Screen/Home';
 // Import the Navigation.css file for styling

function App() {
  return (
    <Router>
      <NavigationBar/>
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/tasks" exact element={<Task/>} />
          <Route path="/counter" element={<NumberCounter/>} />
          <Route path="/SeachFilter" element={<SearchFilter/>} />
        </Routes>
    
    </Router>
  );
}

export default App;  

