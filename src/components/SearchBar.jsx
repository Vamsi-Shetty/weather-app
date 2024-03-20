import { useState, useContext } from 'react';
import { WeatherContext } from '../context/WeatherContext';

const SearchBar = () => {

    const [searchItem, setSearchItem] = useContext(WeatherContext);  
    const [query, setQuery]   = useState("");

    const handleSearch = (e) => {
        e.preventDefault();
        setSearchItem(query);
        console.log("searchItem", query);
    }
  return (
    <div className='search-bar'>
        <form onSubmit={handleSearch}>
            <input
             type="text" 
             placeholder='Search...' 
             onChange={(e) => {setQuery(e.target.value)}}
            />
            <button type='submit'>Search</button>
        </form>
    </div>
  )
}

export default SearchBar