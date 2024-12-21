import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Questions = () => {
  const [question, setQuestion] = useState(''); // For the current input
  const [questions, setQuestions] = useState(() => {
    // Load existing questions from local storage, ensure it's an array
    const savedQuestions = localStorage.getItem('questions');
    try {
      return Array.isArray(JSON.parse(savedQuestions)) ? JSON.parse(savedQuestions) : [];
    } catch (error) {
      return []; // Return empty array if parsing fails
    }
  });
  const [editingIndex, setEditingIndex] = useState(null); // Track the index of the question being edited

  const handleEnter = (e) => {
    if (e.key === 'Enter' && question.trim()) {
      if (editingIndex !== null) {
        // If editing, update the existing question
        const updatedQuestions = questions.map((q, index) =>
          index === editingIndex ? question.trim() : q
        );
        setQuestions(updatedQuestions);
        localStorage.setItem('questions', JSON.stringify(updatedQuestions));
        setEditingIndex(null); // Reset the editing state
      } else {
        // Add new question if not editing
        const updatedQuestions = [...questions, question.trim()];
        setQuestions(updatedQuestions); // Update state
        localStorage.setItem('questions', JSON.stringify(updatedQuestions)); // Update local storage
      }
      setQuestion(''); // Clear the input field
    }
  };

  const handleClear = () => {
    setQuestions([]); // Clear the state
    localStorage.removeItem('questions'); // Clear local storage
  };

  const handleDelete = (index) => {
    const updatedQuestions = questions.filter((_, i) => i !== index);
    setQuestions(updatedQuestions); // Update state
    localStorage.setItem('questions', JSON.stringify(updatedQuestions)); // Update local storage
  };

  const handleEdit = (index) => {
    setQuestion(questions[index]); // Set the question to edit in the input field
    setEditingIndex(index); // Set the index of the question being edited
  };

  return (
    <div>
      <main className="bg-blue-200 min-h-screen flex flex-col p-8 justify-center items-center gap-4">
        <div className="form flex flex-col gap-6 w-2/4 rounded-xl border-2 border-[#1C274C] p-7">
          <div className="header flex items-center justify-center">
            <h1 className="text-xl text-[#1C274C]">Enter Questions</h1>
          </div>

          <div className="entry flex flex-col p-3 gap-4 items-center">
            <input
              type="text"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              onKeyDown={handleEnter} // Handle the Enter key
              placeholder={editingIndex !== null ? "Edit the question" : "Type a question and press Enter"}
              className="px-4 py-2 border w-2/3 rounded-lg focus:outline-none text-center font-bold first-letter:uppercase focus:ring-2 focus:ring-blue-500 hover:border-blue-300 transition-all"
            />

            <div className="questions-list flex flex-col items-center justify-center bg-white p-3 rounded-lg w-full">
              <h2 className="text-lg font-bold text-[#1C274C]">Questions:</h2>
              <ul className="list-disc list-inside text-[#1C274C]">
                {questions.map((q, index) => (
                  <li key={index} className="flex flex-col items-center text-sm font-semibold justify-between py-1">
                    <span>{q}</span>
                    <div className="flex mt-3 gap-3">
                      <button
                        onClick={() => handleEdit(index)}
                        className="text-blue-500 hover:text-blue-700"
                      >
                        <img src="https://www.svgrepo.com/show/521620/edit.svg" alt="" className="h-6" />
                      </button>
                      <button
                        onClick={() => handleDelete(index)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <img src="https://www.svgrepo.com/show/502608/delete-2.svg" alt="" className="h-6" />
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="actions flex gap-4">
              <button
                onClick={handleClear}
                className="px-4 py-2 bg-red-500 text-white rounded-full hover:bg-red-700 transition-all"
              >
                <img src="https://www.svgrepo.com/show/506648/clear.svg" alt="" className="h-6" />
              </button>

              <Link
                to="/players"
                className="pl-4 pr-4 border border-gray-700 flex gap-2 justify-center items-center rounded-full hover:text-black hover:bg-blue-300 transition-all"
              >
                Go <img src="https://www.svgrepo.com/show/535153/arrow-right.svg" className="h-8" alt="" />
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Questions;
  