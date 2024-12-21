import React, { useEffect, useState } from 'react';
import Divider from './parts/Divider';

const Players = () => {
  const [players, setPlayers] = useState({ player1: '', player2: '' });
  const [questionIndex, setQuestionIndex] = useState(0); // Tracks the current shuffled question
  const [questions, setQuestions] = useState([]); // Will store shuffled questions
  const [isQuestionVisible, setIsQuestionVisible] = useState(false); // To toggle question visibility
  const [turn, setTurn] = useState('player1'); // Track whose turn it is
  const [scores, setScores] = useState({ player1: 0, player2: 0 }); // Store player scores
  const [showModal, setShowModal] = useState(false); // To show the modal when 150 points is reached

  useEffect(() => {
    // Load players and questions from local storage if available
    const storedPlayers = JSON.parse(localStorage.getItem('players'));
    if (storedPlayers) {
      setPlayers(storedPlayers); // Update state with the stored player names
    }

    const storedQuestions = JSON.parse(localStorage.getItem('questions'));
    if (storedQuestions) {
      shuffleArray(storedQuestions);
      setQuestions(storedQuestions); // Store shuffled questions in state
    } else {
      const defaultQuestions = [
{
  "quiz": [
    {
      "question": "What is the name of the king who discovered the Book of the Law during temple renovations, leading to major religious reforms in Judah?",
      "answer": "King Josiah",
      "reference": "2 Kings 22:8-11"
    },
    {
      "question": "In the Book of Numbers, who succeeded Aaron as high priest?",
      "answer": "Eleazar",
      "reference": "Numbers 20:25-28"
    },
    {
      "question": "Complete the prophecy from Amos: 'The days are coming, declares the Lord, when the reaper will be overtaken by the plowman and the planter by the one treading...'",
      "answer": "grapes",
      "reference": "Amos 9:13"
    },
    {
      "question": "What does the name 'Maher-Shalal-Hash-Baz,' the son of Isaiah, mean?",
      "answer": "'Quick to the plunder, swift to the spoil.'",
      "reference": "Isaiah 8:3"
    },
    {
      "question": "Which Psalm begins with the cry: 'Why do the nations conspire, and the peoples plot in vain?'",
      "answer": "Psalm 2",
      "reference": "Psalm 2:1"
    },
    {
      "question": "In Ezekiel’s vision of the new temple, what is the significance of the water flowing from under the threshold of the temple?",
      "answer": "It symbolizes life and healing.",
      "reference": "Ezekiel 47:1-12"
    },
    {
      "question": "Which obscure Old Testament figure is mentioned as the ancestor of the Rechabites, who were praised for their faithfulness to their forefather’s command?",
      "answer": "Jonadab son of Rechab",
      "reference": "Jeremiah 35:6-19"
    },
    {
      "question": "Complete the verse: 'In the beginning God created the heaven and the...'",
      "answer": "earth",
      "reference": "Genesis 1:1"
    },
    {
      "question": "What object did Aaron’s rod miraculously turn into before Pharaoh?",
      "answer": "A serpent",
      "reference": "Exodus 7:10"
    },
    {
      "question": "Complete the verse from Isaiah: 'But those who hope in the Lord will renew their strength. They will soar on wings like...'",
      "answer": "eagles",
      "reference": "Isaiah 40:31"
    },
    {
      "question": "What was the name of the mountain where Moses received the Ten Commandments?",
      "answer": "Mount Sinai",
      "reference": "Exodus 19:20"
    },
    {
      "question": "What is the shortest verse in the Old Testament?",
      "answer": "'You shall not kill.'",
      "reference": "Exodus 20:13"
    },
    {
      "question": "Who is the prophet that had a vision of a valley of dry bones?",
      "answer": "Ezekiel",
      "reference": "Ezekiel 37:1-14"
    },
    {
      "question": "Who was the father of King David?",
      "answer": "Jesse",
      "reference": "1 Samuel 16:10-13"
    },
    {
      "question": "Complete the verse: 'For the mystery of lawlessness is already at work; only he who now restrains it will do so until he is...'",
      "answer": "taken out of the way",
      "reference": "2 Thessalonians 2:7"
    },
    {
      "question": "In which New Testament letter is the phrase 'faith without works is dead' found, and what example is given to illustrate this?",
      "answer": "James 2:26; examples include Abraham offering Isaac and Rahab hiding the spies.",
      "reference": "James 2:26"
    },
    {
      "question": "What is the name of the woman mentioned in Romans 16 who is called a deacon of the church in Cenchreae?",
      "answer": "Phoebe",
      "reference": "Romans 16:1"
    },
    {
      "question": "What specific event is referenced in Jude 9, involving the Archangel Michael?",
      "answer": "Michael disputing with the devil over the body of Moses.",
      "reference": "Jude 9"
    },
    {
      "question": "According to the Book of Hebrews, Melchizedek is described as 'without father, without mother, without genealogy.' Why is he compared to Christ?",
      "answer": "He remains a priest forever.",
      "reference": "Hebrews 7:3"
    },
    {
      "question": "In the Parable of the Ten Virgins, what did the foolish virgins fail to bring?",
      "answer": "Extra oil for their lamps.",
      "reference": "Matthew 25:3"
    },
    {
      "question": "Which epistle warns against the teaching of Balaam and mentions the Nicolaitans?",
      "answer": "Revelation, specifically to the church in Pergamum.",
      "reference": "Revelation 2:14-15"
    },
    {
      "question": "Who was the Roman governor who sentenced Jesus to death?",
      "answer": "Pontius Pilate",
      "reference": "John 19:16"
    },
    {
      "question": "What were the last words of Jesus on the cross according to the Gospel of John?",
      "answer": "'It is finished.'",
      "reference": "John 19:30"
    },
    {
      "question": "What is the last book of the Bible?",
      "answer": "Revelation",
      "reference": "Revelation 1:1"
    },
    {
      "question": "What were the names of Job’s three friends who came to 'comfort' him?",
      "answer": "Eliphaz, Bildad, and Zophar",
      "reference": "Job 2:11"
    },
    {
      "question": "Complete the verse: 'Blessed are the poor in spirit, for theirs is the...'",
      "answer": "kingdom of heaven",
      "reference": "Matthew 5:3"
    },
    {
      "question": "Which New Testament book contains the 'fruit of the Spirit' and what are they?",
      "answer": "Galatians 5:22-23; Love, joy, peace, patience, kindness, goodness, faithfulness, gentleness, and self-control.",
      "reference": "Galatians 5:22-23"
    },
    {
      "question": "Who betrayed Jesus for 30 pieces of silver?",
      "answer": "Judas",
      "reference": "Matthew 26:15"
    },
    {
      "question": "What was Jesus' first miracle?",
      "answer": "Turning water into wine.",
      "reference": "John 2:1-11"
    },
    {
      "question": "Complete the verse: 'For where two or three gather in my name, there am I with...'",
      "answer": "them",
      "reference": "Matthew 18:20"
    }
  ]
}

      ];
      shuffleArray(defaultQuestions);
      setQuestions(defaultQuestions);
      localStorage.setItem('questions', JSON.stringify(defaultQuestions)); // Store default questions
    }

    // Load the scores and questionIndex from local storage
    const storedScores = JSON.parse(localStorage.getItem('scores'));
    if (storedScores) {
      setScores(storedScores);
    }

    const storedQuestionIndex = JSON.parse(localStorage.getItem('questionIndex'));
    if (storedQuestionIndex !== null) {
      setQuestionIndex(storedQuestionIndex);
    }

  }, []);

  // Shuffle the questions array
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
  };

  // Function to handle question removal
  const handleRemoveQuestion = (index) => {
    const newQuestions = [...questions];
    newQuestions.splice(index, 1); // Remove the question from the array

    setQuestions(newQuestions);
    localStorage.setItem('questions', JSON.stringify(newQuestions)); // Update localStorage

    // If there are no more questions, show a modal
    if (newQuestions.length === 0) {
      setShowModal(true);
    } else {
      // Move to the next question after removing the current one
      setQuestionIndex((prevIndex) => (prevIndex + 1) % newQuestions.length);
      localStorage.setItem('questionIndex', JSON.stringify((prevIndex + 1) % newQuestions.length));
    }
  };

  // Add points when the player answers a question
  const handleAddPoints = (player) => {
    const bonus = turn !== player ? 10 : 0;
    const newScore = scores[player] + 10 + bonus;

    setScores((prevScores) => {
      const updatedScores = { ...prevScores, [player]: newScore };
      localStorage.setItem('scores', JSON.stringify(updatedScores)); // Update local storage with new scores
      return updatedScores;
    });

    if (newScore >= 150) {
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

  // Skip the current question and go to the next one
  const handleSkipQuestion = () => {
    setQuestionIndex((prevIndex) => (prevIndex + 1) % questions.length);
    localStorage.setItem('questionIndex', JSON.stringify((questionIndex + 1) % questions.length));
    setTurn(turn === 'player1' ? 'player2' : 'player1'); // Skip to the next player's turn
  };

  // Reset the game (clear scores, questionIndex, and players)
  const handleResetGame = () => {
    setScores({ player1: 0, player2: 0 });
    setQuestionIndex(0);
    localStorage.removeItem('scores');
    localStorage.removeItem('questionIndex');
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
              {questions[questionIndex]}
            </h1>
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
                <p className="score text-[#1C274C] text-xl font-semibold">
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

            <div className="flex flex-col items-center gap-2">
            <Divider />

<div>
  <button
    onClick={handleSkipQuestion}
    className="px-6 py-2 bg-[#FF6347] text-white rounded-full hover:bg-red-600 mt-4"
  >
    Skip Question
  </button>
</div>
            </div>


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
                <p className="score text-[#1C274C] text-xl font-semibold">
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
          <h1 className="turn text-xl text-[#1C274C] capitalize">
            It's {turn ? players[turn] : 'Player/Team 1'}'s turn to answer
          </h1>
        </div>

        <button
          onClick={handleResetGame}
          className="px-6 py-2 mt-6 bg-red-500 text-white rounded-full hover:bg-red-700 transition-all"
        >
          Reset Game
        </button>

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
