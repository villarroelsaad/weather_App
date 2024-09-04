/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";


function Card({ data }) {
  const [clim, setClim] = useState('')
  
  useEffect(() => {
    if (data.current.condition.text === 'Sunny') {
      setClim('./sun.svg')
    }
    else if (data.current.condition.text === 'Partly cloudy') {
      setClim('./cloudy.svg')
    }
    else if (data.current.condition.text === 'rain') {
      setClim('./1.svg')
    }
    else {
      setClim('./moon.svg')
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data.current.condition.text]);

  return (
    <div className="flex w-450 sm:w-650 flex-wrap p-2 justify-evenly mb-12 gap-2 mt-3  ">
      <div className=" flex w-350 flex-col">
      <h2 className="text-2xl text-slate-900  font-bold">{data.location.name}, {data.location.country}</h2>
        <p className="text-xl text-sky-700 font-semibold"> {data.location.localtime}</p> <hr className="h-1 mt-2  mb-4" />
        <p className="text-2xl w-1/2 text-sky-500"><span className="text-slate-900 font-semibold text-6xl">{data.current.temp_c}°c </span> {data.current.condition.text}</p>
    
      </div>
      <div className="mb-4 sm:mt-14 mt-6"> 
        <img src={clim} className=" h-40 " />
        </div>
        <hr className="h-1 w-10/12 sm:w-11/12 mt-1 mb-3" />
        <div className="flex flex-wrap w-650 justify-between pl-10 pr-10 mt-4 items-center">
      <div>
      <p className="text-2xl mb-2 text-gray-900 font-semibold"><span className="text-sky-500 font-medium">Air direction </span> {data.current.wind_degree}</p>
          <p className="text-2xl text-gray-900 font-semibold "><span className="text-sky-500 " >Wind</span> {data.current.wind_kph}km/h </p>
      </div>
      <div className="flex flex-col">
      <p className="text-2xl mb-2 text-gray-900 font-semibold"><span className=" text-sky-500  font-medium">Cloud</span> {data.current.wind_degree}°</p>
        <p className="text-2xl text-gray-900 font-semibold "><span className="text-sky-500  font-medium"> Humidity</span> {data.current.humidity}%</p> 
        </div>
        </div>
   </div>
  );
}

export default Card;

