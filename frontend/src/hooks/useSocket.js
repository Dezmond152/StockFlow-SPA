import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';

export const useSocket = () => {
  const [sessionCount, setSessionCount] = useState(0);

  useEffect(() => {
    const socket = io('http://localhost:3001');

    socket.on('sessionCount', (count) => {
      setSessionCount(count);
    });

    return () => socket.disconnect();
  }, []);

  return sessionCount;
};