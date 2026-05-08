import React, { useEffect, useState } from "react";
import { useSocket } from "../../hooks/useSocket";

const TIME_UPDATE_INTERVAL = 60000;

export function TopMenu() {
  const sessionCount = useSocket();
  const [currentDate, setCurrentDate] = useState(new Date()); 

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDate(new Date());
    }, TIME_UPDATE_INTERVAL);

    return () => clearInterval(timer);
  }, []);

  const formattedDate = currentDate.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  const formattedTime = currentDate.toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <header className="navbar bg-white shadow-sm px-5">
      <div className="container-fluid d-flex justify-content-between align-items-center p-0">
        <div className="d-flex align-items-center">
          <span className="text-success text-uppercase fw-semibold">
            COMPANY NAME
          </span>
        </div>

        <div className="d-flex align-items-center">
          <div className="d-flex align-items-end">
            <div className="d-flex flex-column me-2">
              <small style={{ fontSize: "0.8rem" }}>
                Today
              </small>

              <span style={{ fontSize: "0.9rem" }}>
                {formattedDate}
              </span>
            </div>

            <time className="me-5">
              <span style={{ fontSize: "0.9rem" }}>{formattedTime}</span>
            </time>
          </div>

          <div>
            Sessions: <span>{sessionCount}</span>
          </div>
        </div>
      </div>
    </header>
  );
}