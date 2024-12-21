import React, { useEffect, useState } from 'react';
import Divider from './parts/Divider';

const Players = () => {
  const [players, setPlayers] = useState({ player1: '', player2: '' });
  const [questions, setQuestions] = useState([]); // Will store questions from localStorage
  const [questionIndex, setQuestionIndex] = useState(0); // Tracks the current question index
  const [isQuestionVisible, setIsQuestionVisible] = useState(false); // To toggle question visibility
  const [turn, setTurn] = useState('player1'); // Track whose turn it is
  const [scores, setScores] = useState({ player1: 0, player2: 0 }); // Store player scores
  const [showModal, setShowModal] = useState(false); // To show the modal when 150 points is reached

  useEffect(() => {
    const storedPlayers = JSON.parse(localStorage.getItem('players'));
    if (storedPlayers) {
      setPlayers(storedPlayers); // Update state with the stored player names
    }

    // If questions aren't in localStorage, fetch them from JSON
    const storedQuestions = JSON.parse(localStorage.getItem('questions'));
    if (!storedQuestions) {
      fetch('./Questions.json')  // Replace with your actual JSON file path or API
        .then((response) => response.json())
        .then((data) => {
          localStorage.setItem('questions', JSON.stringify(data)); // Store fetched questions in localStorage
          setQuestions(data); // Store questions in state
          selectRandomQuestion(data); // Select a random question initially
        })
        .catch((error) => console.error('Error fetching questions:', error));
    } else {
      setQuestions(storedQuestions); // Use stored questions if available
      selectRandomQuestion(storedQuestions); // Select a random question initially
    }
  }, []);

  // Function to select a random question from the questions array
  const selectRandomQuestion = (questions) => {
    const randomIndex = Math.floor(Math.random() * questions.length);
    setQuestionIndex(randomIndex); // Set the random question index
  };

  // Function to handle question removal from localStorage
  const handleRemoveQuestion = (index) => {
    const newQuestions = [...questions];
    newQuestions.splice(index, 1); // Remove the question from the array

    setQuestions(newQuestions);
    localStorage.setItem('questions', JSON.stringify(newQuestions)); // Update localStorage with new questions

    // If there are no more questions, show a modal
    if (newQuestions.length === 0) {
      setShowModal(true);
    } else {
      // Move to the next question after removing the current one
      selectRandomQuestion(newQuestions);
    }
  };

  // Add points when the player answers a question
  const handleAddPoints = (player) => {
    const bonus = turn !== player ? 10 : 0;
    setScores((prevScores) => ({
      ...prevScores,
      [player]: prevScores[player] + 10 + bonus,
    }));

    if (scores[player] + 10 + bonus >= 150) {
      setShowModal(true);
    }

    setTurn(player === 'player1' ? 'player2' : 'player1');

    // Remove the current question from the list
    handleRemoveQuestion(questionIndex);
  };

  // Toggle visibility of the current question
  const handleToggleQuestion = () => {
    setIsQuestionVisible(!isQuestionVisible);
  };

  // Close the modal
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <main className="bg-blue-200 min-h-screen flex flex-col p-8 justify-center items-center gap-3">
        <div className="Number header flex flex-col gap-3 items-center mb-3 justify-center">
          <h1 className="font-extrabold text-4xl text-[#1C274C] tracking-wide glow">
            Question {questionIndex + 1}:
          </h1>
          {isQuestionVisible && (
            <h1 className="Question text-2xl text-[#1C274C] capitalize">
              {questions[questionIndex]?.question}
            </h1>
          )}
          {isQuestionVisible && questions[questionIndex]?.hint && (
            <p className="hint text-xl text-[#1C274C]">{questions[questionIndex]?.hint}</p>
          )}
          <button
            onClick={handleToggleQuestion}
            className="px-6 py-2 bg-[#1C274C] text-white rounded-full mt-4 hover:bg-blue-500 transition-all"
          >
            {isQuestionVisible ? 'Hide Question' : 'Show Question'}
          </button>
        </div>

        <div className="bg-white w-3/4 p-6 rounded-xl shadow-xl border-4 border-[#1C274C] neon-border">
          <div className="players flex flex-row justify-around items-center">
            <div className="player">
              <div className="image p-6 m-3 flex flex-col gap-4 items-center rounded-lg bg-blue-100 shadow-inner game-card">
                <img
                  src="https://www.svgrepo.com/show/512697/profile-1341.svg"
                  className="h-24 neon-img"
                  alt="Player 1"
                />
                <h1 className="text-[#1C274C] text-2xl font-bold uppercase">
                  {players.player1 || 'Player/Team 1'}
                </h1>
                <p className="font-gamey score text-[#1C274C] text-xl font-semibold">
                  Score: <span className="text-2xl text-blue-600">{scores.player1}</span>
                </p>
                <div className="score-action flex justify-between gap-4 mt-4">
                  <button
                    onClick={() => handleAddPoints('player1')}
                    className="pl-6 pr-6 py-2 bg-[#1C274C] text-white rounded-full hover:bg-blue-500 hover:scale-110 transition-all border-2 border-[#1C274C] game-btn"
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>

            <Divider />

            <div className="player">
              <div className="image p-6 m-3 flex flex-col gap-4 items-center rounded-lg bg-blue-100 shadow-inner game-card">
                <img
                  src="https://www.svgrepo.com/show/512697/profile-1341.svg"
                  className="h-24 neon-img"
                  alt="Player 2"
                />
                <h1 className="text-[#1C274C] text-2xl font-bold uppercase">
                  {players.player2 || 'Player/Team 2'}
                </h1>
                <p className="score font-gamey text-[#1C274C] text-xl font-semibold">
                  Score: <span className="text-2xl text-blue-600">{scores.player2}</span>
                </p>
                <div className="score-action flex justify-between gap-4 mt-4">
                  <button
                    onClick={() => handleAddPoints('player2')}
                    className="pl-6 pr-6 py-2 bg-[#1C274C] text-white rounded-full hover:bg-blue-500 hover:scale-110 transition-all border-2 border-[#1C274C] game-btn"
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="header flex flex-col gap-3 items-center mt-6">
          <h1 className="turn text-xl text-[#1C274C]">
            It's {turn ? players[turn] : 'Player/Team 1'}'s turn to answer
          </h1>
        </div>

        {showModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
            <div className="bg-white p-6 rounded-lg shadow-xl max-w-sm w-full">
              <h2 className="text-2xl font-bold text-[#1C274C]">Game Over!</h2>
              <p className="text-xl text-[#1C274C] mt-4">
                Congratulations to <span className="font-bold">{scores.player1 >= 150 ? players.player1 : players.player2}</span>!
              </p>
              <p className="text-lg mt-2">
                <span className="font-bold">Player 1 Score:</span> {scores.player1}
              </p>
              <p className="text-lg mt-2">
                <span className="font-bold">Player 2 Score:</span> {scores.player2}
              </p>
              <button
                onClick={closeModal}
                className="mt-4 px-6 py-2 bg-[#1C274C] text-white rounded-full hover:bg-blue-500"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Players;
