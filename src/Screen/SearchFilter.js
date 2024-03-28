import React, { useState } from 'react';
import './SearchFilter.css'; // Import the CSS file for styling

function SearchFilter() {
  // Sample data (replace with your actual data)
  const [data, setData] = useState([
    { id: 1, name: 'C' },
    { id: 2, name: 'Cpp' },
    { id: 3, name: 'JavaScript' },
    { id: 4, name: 'Java' },
    { id: 5, name: 'Ruby' },
    { id: 6, name: 'Python' },
    { id: 7, name: 'C#' },
    { id: 8, name: 'C++' },
    { id: 9, name: 'Swift' },
    { id: 10, name: 'Go' },
  


  ]);

  const [searchQuery, setSearchQuery] = useState('');

  // Filtering function
  const filterData = (query) => {
    return data.filter(item =>
      item.name.toLowerCase().includes(query.toLowerCase())
    );
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredData = filterData(searchQuery);

  return (
    <div className="search-container">
      <h2>Search Filter</h2>
      <input
        type="text"
        className="search-input"
        placeholder="Search..."
        value={searchQuery}
        onChange={handleSearchChange}
      />
      <ul className="result-list">
        {filteredData.map(item => (
          <li key={item.id} className="result-item">{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default SearchFilter;