import { useState } from "react";
import Navbar from "./components/Navbar";
import Popup from "./components/Popup";

function App() {
  const [isModelOpen, setIsModelOpen] = useState(false);

  return (
    <div>
      <Navbar />
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
    </div>
  );
}

export default App;
