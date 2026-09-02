import { useEffect, useState } from "react";
import { io } from "socket.io-client";

export const useSocket = (): number => {
  const [sessionCount, setSessionCount] = useState<number>(0);

  useEffect(() => {
    const socket = io("http://localhost:3001", {
      transports: ["websocket"],
    });

    const handleSessionCount = (count: number) => {
      setSessionCount(count);
    };

    socket.on("sessionCount", handleSessionCount);

    return () => {
      socket.off("sessionCount", handleSessionCount);
      socket.disconnect();
    };
  }, []);

  return sessionCount;
};