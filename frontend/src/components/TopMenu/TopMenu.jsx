import React, { useEffect, useState } from "react";
import { useSocket } from "../../hooks/useSocket";
import { ShieldIcon } from "../../icons/ShieldIcon";
import { ClockIcon } from "../../icons/ClockIcon";
import "./TopMenu.css";

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

  const dayOfWeek = currentDate.toLocaleDateString("ru-RU", {
    weekday: "long",
  });
  const formattedDate = currentDate
    .toLocaleDateString("ru-RU", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    })
    .replace(".", ",");

  const formattedTime = currentDate.toLocaleTimeString("ru-RU", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <header className="navbar bg-white top-menu">
      <div className="container-fluid top-menu-content">
        <div className="top-menu-left">
          <div className="logo-icon">
            <ShieldIcon size={50} />
          </div>
          <span className="brand-name">INVENTORY</span>
        </div>

        <div className="top-menu-center">
          <div className="search-container">
            <input type="text" placeholder="Поиск" className="search-input" />
          </div>
        </div>

        <div className="top-menu-right">
          <div className="date-info">
            <div className="day-name">{dayOfWeek.charAt(0).toUpperCase() + dayOfWeek.slice(1)}</div>
            <div className="full-date">{formattedDate}</div>
          </div>

          <div className="time-info">
            <ClockIcon size={18} />
            <span className="time-value">{formattedTime}</span>
          </div>

          <div className="sessions-badge">
            <span>Активных пользователя: {sessionCount}</span>
          </div>
        </div>
      </div>
    </header>
  );
}
