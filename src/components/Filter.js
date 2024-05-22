import React from 'react'; 
import '../styles/Filter.css'; 
 
const classes = ['Гризуни', 'Молюски', 'Рептилії', 'Птахи']; 
 
function Filter({ filterClass, setFilterClass }) { 
  return ( 
    <select 
      value={filterClass} 
      onChange={(e) => setFilterClass(e.target.value)} 
      className="filter-select" 
    > 
      <option value="">Всі класи</option> 
      {classes.map((className) => ( 
        <option key={className} value={className}> 
          {className} 
        </option> 
      ))} 
    </select> 
  ); 
} 
 
export default Filter;