import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Router components
import Task from './Screen/Task'; // Import the Task component
import NumberCounter from './Screen/NumberCounter'; // Import the NumberCounter component
import NavigationBar from './Componets/NavigationBar';
import SearchFilter from './Screen/SearchFilter';
import Home from './Screen/Home';
import Footer from './Componets/Footer';
import DataGrid from './Screen/DataGrid';
import DragDrop from './Screen/DragDrop';
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
          <Route path="/DataGrid" element={<DataGrid/>} />
          <Route path="/DragDrop" element={<DragDrop/>} />

        </Routes>
      <Footer/>
    </Router>
  );
}

export default App;  

