import React from "react";
import { FiSearch, FiBell, FiMail, FiMoon, FiSettings } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import "./Notification.css";

interface NotificationItem {
  id: number;
  name: string;
  date: string;
}

const notifications: NotificationItem[] = [
  { id: 1, name: "Jua", date: "Today" },
  { id: 2, name: "Jua", date: "Today" },
  { id: 3, name: "Jua", date: "Yesterday" },
  { id: 4, name: "Jua", date: "Yesterday" },
  { id: 5, name: "Jua", date: "Yesterday" },
];

const groupedNotifications: Record<string, NotificationItem[]> = notifications.reduce(
  (acc: Record<string, NotificationItem[]>, notif) => {
    if (!acc[notif.date]) acc[notif.date] = [];
    acc[notif.date].push(notif);
    return acc;
  },
  {}
);

const Notification: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="notification-container">
      {/* Navbar Icons */}
      <div className="nav-icons">
        <button className="icon-button" aria-label="Search"><FiSearch /></button>
        <button className="icon-button" onClick={() => navigate('/notifications')} aria-label="Notifications"><FiBell /></button>
        <button className="icon-button" onClick={() => navigate('/mail')} aria-label="Mail"><FiMail /></button>
        <button className="icon-button" aria-label="Dark Mode"><FiMoon /></button>
        <button className="icon-button" onClick={() => navigate("/settings")} aria-label="Settings"><FiSettings /></button>
      </div>

      {/* Notifikasi dikelompokkan berdasarkan tanggal */}
      {Object.entries(groupedNotifications).map(([date, notifs]) => (
        <div key={date} className="notification-group">
          <h2 className="date-header">{date}</h2>
          <div className="notification-card">
            {notifs.map((notif) => (
              <div className="notification-item" key={notif.id}>
                <div className="profile-pic"></div>
                <p>
                  <span className="username">{notif.name}</span> wants to add you as a friend
                </p>
                <div className="buttons">
                  <button className="accept-btn">Accept</button>
                  <button className="decline-btn">Decline</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Notification;