import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Names = () => {
  const [player1, setPlayer1] = useState('');
  const [player2, setPlayer2] = useState('');

  // Function to handle form submission and save names to local storage
  const handleSubmit = () => {
    if (player1.trim() && player2.trim()) {
      const players = { player1, player2 };
      localStorage.setItem('players', JSON.stringify(players)); // Save to local storage
    }
  };

  return (
    <div>
      <main className="bg-blue-200 min-h-screen flex flex-col justify-center items-center">
        <div className="form flex flex-col gap-6 w-full max-w-md rounded-xl border-2 border-[#1C274C] p-8 bg-white shadow-lg">
          <div className="header text-center">
            <h1 className="text-2xl font-bold text-[#1C274C]">Enter Players or Team Names</h1>
          </div>

          <div className="entry flex flex-col gap-6 items-center">
            <input
              type="text"
              value={player1}
              onChange={(e) => setPlayer1(e.target.value)}
              placeholder="Player 1"
              className="w-full px-5 py-3 border rounded-lg focus:outline-none text-center font-bold capitalize focus:ring-2 focus:ring-blue-500 hover:border-blue-300 transition-all"
            />
            <input
              type="text"
              value={player2}
              onChange={(e) => setPlayer2(e.target.value)}
              placeholder="Player 2"
              className="w-full px-5 py-3 border rounded-lg focus:outline-none text-center font-bold capitalize focus:ring-2 focus:ring-blue-500 hover:border-blue-300 transition-all"
            />
            <Link
              to="/players"
              onClick={handleSubmit} // Save names to local storage when clicking "Go"
              className="w-full px-6 py-3 text-center font-semibold text-white bg-blue-500 rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-700 transition-all flex items-center justify-center gap-2"
            >
              Go!
              <img
                src="https://www.svgrepo.com/show/535153/arrow-right.svg"
                className="h-6"
                alt="Arrow Right"
              />
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Names;
