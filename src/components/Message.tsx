import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

const Message = () => {
  const status = useSelector((state: RootState) => state.pin.status);

  if (status === 'granted') return <p className="text-green-400 text-center font-bold text-sm">✅ Access Granted</p>;
  if (status === 'denied') return <p className="text-red-400 text-center font-bold text-sm">❌ Access Denied</p>;
  return null;
};

export default Message;
