import React from 'react';
import { useDispatch } from 'react-redux';
import { addDigit, deleteDigit, submitPin } from '../store/pinSlice';

const keys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '<', '0', 'E'];

const Keypad = () => {
  const dispatch = useDispatch();

  const handleClick = (key: string) => {
    if (key === '<') dispatch(deleteDigit());
    else if (key === 'E') dispatch(submitPin());
    else dispatch(addDigit(key));
  };

  return (
      <div className="grid grid-cols-3 gap-2">
        {keys.map((key) => (
            <button
                key={key}
                onClick={() => handleClick(key)}
                className="bg-gray-300 hover:bg-gray-400 active:bg-gray-500 text-black text-xl font-bold rounded-md py-2 shadow-inner transition-all"
            >
              {key}
            </button>
        ))}
      </div>
  );
};

export default Keypad;
