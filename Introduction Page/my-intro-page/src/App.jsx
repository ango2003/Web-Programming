import './App.css'
import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="flex flex-col md:flex-row">
          {/* Profile Section */}
          <div className="md:w-1/3 bg-blue-500 flex items-center justify-center p-8">
            <img
              src="profile.jpg"
              alt="Profile(Placeholder)"
              className="w-48 h-48 rounded-full border-4 border-white shadow-md"
            />
          </div>

          {/* Info Section */}
          <div className="md:w-2/3 p-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Aaron Ngo</h1>

            <p className="text-lg text-gray-600 mb-6">
              I am a senior who is majoring in Computer Science at ATU. I have been dealing with computers at a young age, and been tinkering with web development for a while.
            </p>

            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2"><strong>Education:</strong></h2>
              <p className="text-gray-600">Bachelor of Science in Computer Science - ATU</p>
            </div>

            <div className="flex space-x-6">
              <a
                href="mailto:ango1@atu.edu"
                className="text-blue-500 hover:underline"
              >
                Email Me
              </a><br></br>
              <a
                href="https://github.com/ango2003"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
