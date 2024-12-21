import React from 'react';
import { Link } from 'react-router-dom';

const Layout = ({ children }) => {
      const handleBack = () => {
    // You can implement navigation logic here.
    // For example, if using React Router:
    // navigate(-1);
    console.log('Back button clicked!');
  };
  return (
    <div className="relative min-h-screen bg-blue-200">
      {children}

      {/* Global Buttons */}
{/* 
      <div className="fixed top-4 left-4 flex flex-row gap-3">

      </div> */}
 


      <div className="fixed bottom-4 right-4 flex flex-col gap-3">
      <Link
          to="/"
          className="bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-600 transition-all flex items-center justify-center"
        >
          <img
            src="https://www.svgrepo.com/show/529026/home.svg"
            alt="Settings"
            className="h-6"
          />
        </Link>
        <Link
          to="/players"
          className="bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-600 transition-all flex items-center justify-center"
        >
          <img
            src="https://www.svgrepo.com/show/79886/scoreboard-tied.svg"
            alt="Questions"
            className="h-6"
          />
        </Link>

        <Link
          to="/settings"
          className="bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-600 transition-all flex items-center justify-center"
        >
          <img
            src="https://www.svgrepo.com/show/529867/settings.svg"
            alt="Settings"
            className="h-6"
          />
        </Link>
        <Link
          to="/questions"
          className="bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-600 transition-all flex items-center justify-center"
        >
          <img
            src="https://www.svgrepo.com/show/375064/question-mark.svg"
            alt="Questions"
            className="h-6"
          />
        </Link>
        <Link to="/answers" className="bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-600 transition-all flex items-center justify-center">
            <img src="https://www.svgrepo.com/show/215811/answer-student.svg" alt="" className="h-6" />
        </Link>
      </div>
    </div>
  );
};

export default Layout;
