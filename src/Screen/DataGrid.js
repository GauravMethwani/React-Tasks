import React, { useState } from 'react';
import './DataGrid.css'; // Import CSS file for styling
import profile from '../Componets/img/profile.png';
import woman from '../Componets/img/woman.png'
const jsonData = [
    { customerName: 'Rohit Sharma', lastSeen: '2023-10-15', orders: 5, totalSpent: 250, lastPurchase: '2023-10-10', news: 'Yes', segment: 'Premium', imgUrl:profile },
    { customerName: 'Shreyanka Patil', lastSeen: '2023-09-20', orders: 8, totalSpent: 400, lastPurchase: '2023-09-15', news: 'No', segment: 'Standard', imgUrl:woman },
    { customerName: 'Smriti Mandhana', lastSeen: '2023-11-05', orders: 3, totalSpent: 150, lastPurchase: '2023-11-01', news: 'Yes', segment: 'Premium', imgUrl:woman },
    { customerName: 'Virat Kholi', lastSeen: '2023-08-18', orders: 12, totalSpent: 600, lastPurchase: '2023-08-15', news: 'No', segment: 'Standard',imgUrl:profile  },
    { customerName: 'Shubman Gill', lastSeen: '2023-12-20', orders: 7, totalSpent: 350, lastPurchase: '2023-12-15', news: 'Yes', segment: 'Premium',imgUrl:profile  },
    { customerName: 'Mithali Raj', lastSeen: '2023-07-10', orders: 4, totalSpent: 200, lastPurchase: '2023-07-05', news: 'No', segment: 'Standard',imgUrl:woman  },
    { customerName: 'Suryakumar yadav', lastSeen: '2023-10-30', orders: 9, totalSpent: 450, lastPurchase: '2023-10-25', news: 'Yes', segment: 'Premium',imgUrl:profile  },
    { customerName: 'HarmanPreet Kaur', lastSeen: '2023-06-25', orders: 6, totalSpent: 300, lastPurchase: '2023-06-20', news: 'No', segment: 'Standard',imgUrl:woman },
    { customerName: 'Rishab Pant', lastSeen: '2023-09-05', orders: 10, totalSpent: 500, lastPurchase: '2023-09-01', news: 'Yes', segment: 'Premium',imgUrl:profile  },
    { customerName: 'Sanju Samson', lastSeen: '2023-05-15', orders: 2, totalSpent: 100, lastPurchase: '2023-05-10', news: 'No', segment: 'Standard',imgUrl:profile  },
  ];

const DataGrid = () => {
    // eslint-disable-next-line
  const [data, setData] = useState(jsonData);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSort = (key) => {
    if (sortBy === key) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(key);
      setSortOrder('asc');
    }
  };

  const filteredData = data.filter(item =>
    item.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.segment.toLowerCase().includes(searchTerm.toLowerCase())||
    item.lastSeen.includes(searchTerm.toLowerCase())|| item.lastPurchase.includes(searchTerm.toLowerCase()) ||  item.totalSpent.toString().toLowerCase().includes(searchTerm.toLowerCase())||  item.orders.toString().toLowerCase().includes(searchTerm.toLowerCase())||  item.lastSeen.toString().toLowerCase().includes(searchTerm.toLowerCase())||  item.lastPurchase.toString().toLowerCase().includes(searchTerm.toLowerCase())||  item.news.toLowerCase().includes(searchTerm.toLowerCase())||  item.segment.toLowerCase().includes(searchTerm.toLowerCase()) || Object.values(item).some(val => typeof val === 'string' && val.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const sortedData = filteredData.sort((a, b) => {
    const aValue = sortBy ? a[sortBy] : null;
    const bValue = sortBy ? b[sortBy] : null;
    if (sortOrder === 'asc') {
      return aValue < bValue ? -1 : aValue > bValue ? 1 : 0;
    } else {
      return aValue > bValue ? -1 : aValue < bValue ? 1 : 0;
    }
  });

  return (
    <div className='data-grid-container'>
      <input type="text" placeholder="Search..." value={searchTerm} onChange={handleSearch} />
      <div className='table-container'>
      <table className="data-grid">
        <thead>
          <tr>
            <th onClick={() => handleSort('customerName')}>Customer Name</th>
            <th onClick={() => handleSort('lastSeen')}>Last Seen</th>
            <th onClick={() => handleSort('orders')}>Orders</th>
            <th onClick={() => handleSort('totalSpent')}>Total Spent</th>
            <th onClick={() => handleSort('lastPurchase')}>Last Purchase</th>
            <th onClick={() => handleSort('news')}>News</th>
            <th onClick={() => handleSort('segment')}>Segment</th>
          </tr>
        </thead>
        <tbody>
          {sortedData.map((item, index) => (
            <tr key={index}>
              <td className='center'>
              <img src={item.imgUrl} alt="Customer" className="customer-image" />
              {item.customerName}</td>
              <td>{item.lastSeen}</td>
              <td>{item.orders}</td>
              <td>{item.totalSpent}</td>
              <td>{item.lastPurchase}</td>
              <td>{item.news}</td>
              <td>{item.segment}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default DataGrid;