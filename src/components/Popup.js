import React from "react";

function Popup({ message, closePopup }) {
  return (
    <div className="fixed inset-0 h-screen flex justify-center items-center">
      <div className="bg-white w-64 py-10 px-4 rounded-sm">
        <p className="text-center text-lg">{message}</p>
        <div className="flex justify-center gap-5 mt-5">
          <button
            className="bg-red-500 text-white px-5 py-2 rounded-sm"
            onClick={() => closePopup()}
          >
            cancel
          </button>
          <button
            className="bg-green-500 text-white px-5 py-2 rounded-sm"
            onClick={() => closePopup()}
          >
            confirm
          </button>
        </div>
      </div>
    </div>
  );
}

export default Popup;
