import React from 'react';
import PinDisplay from './components/PinDisplay';
import Keypad from './components/Keypad';
import Message from './components/Message';

const App = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-neutral-900">
            <div className="bg-gray-800 rounded-2xl p-6 shadow-[inset_0_0_8px_#000] border-4 border-gray-700 w-[220px] space-y-5">
                <PinDisplay />
                <Keypad />
                <Message />
            </div>
        </div>
    );
};

export default App;
