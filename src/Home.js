import React from 'react';

function Home() {
  return (
    <div>
      <div className="relative h-screen sm:h-[550px] ">
        <img
          src="https://dlearnerblog.netlify.app/_nuxt/img/homeImage.d05f027.jpeg"
          alt="hero"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 flex justify-center items-center h-full w-full bg-black bg-opacity-50">
          <div className="-mt-20 sm:mt-0">
            <h3 className="text-3xl sm:text-5xl font-bold text-white">
              DLearner
            </h3>
            <p className="text-xl sm:text-2xl font-semibold text-white">
              you need to learn right now
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
