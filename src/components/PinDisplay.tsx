import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

const PinDisplay = () => {
  const { input, status } = useSelector((state: RootState) => state.pin);

  let ringClass = 'ring-gray-400';
  if (status === 'granted') ringClass = 'ring-green-400';
  if (status === 'denied') ringClass = 'ring-red-400';

  return (
      <div
          className={`h-12 w-full bg-black text-lime-400 text-2xl tracking-widest font-mono text-center rounded-md flex items-center justify-center ring-2 ${ringClass}`}
      >
        {'*'.repeat(input.length).padEnd(4, '•')}
      </div>
  );
};

export default PinDisplay;
