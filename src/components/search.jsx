import  { useState, useEffect } from 'react';
import axios from 'axios';


function Search({ onSearch }) {
  const [city, setCity] = useState('miami');
  const apiKey = '455123c4460f4c379c9145853240309'

  const handleSubmit = (e) => {
    e.preventDefault();
    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;
    axios.get(apiUrl)
      .then(response => {
        onSearch(response.data);
      })
      .catch(error => {
        console.error('Error fetching weather data:', error);
      });
  };
  useEffect(() => {
    handleSubmit({ preventDefault: () => {} }); 
  }, []); 


  return (
    <form onSubmit={handleSubmit} className="flex">
    <input
      className="mb-8 rounded-s-lg p-1 h-10 font-medium text-gray-700 outline-none border-2 border-sky-500 flex-grow"
      type="text"
      placeholder={city}
      value={city}
      onChange={(e) => setCity(e.target.value)}
    />
    <button
      className="bg-sky-600 text-gray-100 h-10 w-16 rounded-e-xl active:bg-opacity-60 transition-all"
      type="submit">
      Buscar
    </button>
  </form>
  );
}

export default Search;