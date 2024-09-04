import  { useState } from 'react';
import './index.css';
import Search from './components/search';
import Card from './components/card';

function App() {
  const [weatherData, setWeatherData] = useState(null);

  const handleSearch = (data) => {
    setWeatherData(data);
  };

  return (
    <div>
      <header className='h-20  flex justify-end'>
      <nav className='flex font-semibold text-lg items-center '>
      <a className=' ' href='https://github.com/villarroelsaad/weather_App'><img src='./github.svg' className='h-12 transition-all opacity-80 hover:opacity-50' /></a>
    </nav>
      </header>
    <section className="flex flex-col max-w-700 flex-wrap mt-16 border-2 rounded-3xl border-slate-200 justify-center items-center self-center bg-zinc-50 bg-opacity-40 shadow">
      <h1 className='text-3xl mb-4 font-semibold ' >Weather App</h1>
   
      <Search onSearch={handleSearch} />
   
      {weatherData && <Card data={weatherData} />}
      </section>
   </div>
  );
}

export default App;