import React, { useState } from 'react'
import Popup from './components/Popup'

function About() {
  const [isModelOpen, setIsModelOpen] = useState(false);

  return (
    <>
    <div>About Page</div>
          <div className="flex justify-center items-center h-screen bg-gray-400 bg-opacity-50">
        <button
          className="px-5 py-2 bg-red-500 text-white rounded-sm"
          onClick={() => setIsModelOpen(true)}
        >
          Open
        </button>
      </div>
      {isModelOpen && (
        <Popup
          message="Are You Sure"
          closePopup={() => setIsModelOpen(false)}
        />
      )}
    </>
  )
}

export default About