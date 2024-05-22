import React from 'react'; 
import '../styles/Search.css'; 
 
function Search({ searchTerm, setSearchTerm }) { 
  return ( 
    <input 
      type="text" 
      placeholder="Пошук за назвою" 
      value={searchTerm} 
      onChange={(e) => setSearchTerm(e.target.value)} 
      className="search-input" 
    /> 
  ); 
} 
 
export default Search;