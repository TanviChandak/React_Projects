import axios from 'axios';
import React, { useState } from 'react';
import Spinner from './Spinner';
import useGif from '../hooks/useGif';

const Tag = () => {
  const [dynamicText, setDynamicText] = useState('');
  const { loader, gif, fetchUrl } = useGif(dynamicText);

  const handleInputChange = (event) => {
    setDynamicText(event.target.value);
  };

  return (
    <div className="bg-blue-500 min-h-screen flex flex-col items-center justify-center text-white">
      <div className="bg-yellow-500 w-3/4 p-8 text-center rounded-lg shadow-lg">
        <h1 className="font-extrabold text-4xl mb-4">✨ Find Funky Gifs : {dynamicText} ✨</h1>
        <div className="flex justify-center items-center">
          {loader ? <Spinner /> : <img src={gif} alt="Random Gif" className="max-w-full rounded-lg" />}
        </div>
        <div className="mt-6 text-black">
          <input
            onChange={handleInputChange}
            type="text"
            placeholder="Enter a magical keyword..."
            className="w-full px-4 py-2 rounded-md focus:outline-none focus:border-yellow-700 transition duration-300"
          />
        </div>
        <button
          onClick={fetchUrl}
          className="mt-4 bg-yellow-700 text-white px-6 py-3 rounded-full hover:bg-yellow-800 transition duration-300"
        >
          Search Magical GIF
        </button>
      </div>
      <div className="mt-8 text-white flex flex-col items-center">
        <p>Explore more magic below</p>
        <div className="animate-bounce mt-2 text-3xl">&#x2193;</div>
      </div>
    </div>
  );
};

export default Tag;
