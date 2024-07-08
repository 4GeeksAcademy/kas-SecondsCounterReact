import React from 'react';


export function SecondsCounterView ({ seconds }) {
  const count = 6; // Number of segments/cards

  const rendercounts = () => {
  
    const moveSeconds = String(seconds).padStart(6, "0");

    const countArray = [];
    for (let i = 0; i < count; i++) {
    
      const digit = moveSeconds[i];
      
      countArray.push(
        <div
          key={i}
          className={`w-1/6 h-50 mx-1 p-4 border ${
           "bg-gray-100"}`}>
          <p className="text-gray-600">{digit}</p>
        </div>
      );
    }
    return countArray;
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex w-full justify-center space-x-1">
        {rendercounts()}
      </div>
    </div>
  );
};
