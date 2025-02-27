import React from 'react';

const JoinReasons = () => {
  const reasons = [
    {
      title: "Enjoy on your TV",
      description: "Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "Download your shows to watch offline",
      description: "Save your favourites easily and always have something to watch.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
        </svg>
      )
    },
    {
      title: "Watch everywhere",
      description: "Stream unlimited movies and TV shows on your phone, tablet, laptop and TV.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "Create profiles for kids",
      description: "Send kids on adventures with their favourite characters in a space made just for them — free with your membership.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];

  return (
    <div className="bg-black text-white py-16 px-4 md:px-8 ">
      <div className="max-w-7xl mx-auto md:my-32">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">More reasons to join</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center p-6 rounded-lg transition-transform duration-300 hover:scale-105"
            >
              <div className="mb-4">
                {reason.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-red-600">{reason.title}</h3>
              <p className="text-gray-300">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JoinReasons;