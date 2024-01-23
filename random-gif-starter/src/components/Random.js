import React from 'react';
import Spinner from './Spinner';
import useGif from '../hooks/useGif';

const Random = () => {
  const { loader, gif, fetchUrl } = useGif();

  return (
    <div className="bg-purple-500 min-h-screen flex flex-col items-center justify-center text-white">
      <div className="bg-pink-500 w-3/4 p-8 text-center rounded-lg shadow-lg">
        <h1 className="font-extrabold text-4xl mb-4">✨ Random Surprise! ✨</h1>
        <div className="flex justify-center items-center">
          {loader ? <Spinner /> : <img src={gif} alt="Random Gif" className="max-w-full rounded-lg" />}
        </div>
        <button
          onClick={fetchUrl}
          className="mt-4 bg-pink-700 text-white px-6 py-3 rounded-full hover:bg-pink-800 transition duration-300"
        >
          Another Surprise
        </button>
      </div>
    </div>
  );
};

export default Random;
