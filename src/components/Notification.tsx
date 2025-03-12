import React from "react";
import { FiSearch, FiBell, FiMail, FiSettings, FiHome } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

interface Notification {
  id: number;
  name: string;
  date: string;
}

const notifications: Notification[] = [
  { id: 1, name: "Jua", date: "Today" },
  { id: 2, name: "Lazuardi", date: "Today" },
  { id: 3, name: "Rivan", date: "Yesterday" },
  { id: 4, name: "Ellizabeth", date: "Yesterday" },
  { id: 5, name: "Firdaus", date: "Yesterday" },
];

const groupedNotifications: Record<string, Notification[]> = notifications.reduce((acc, notif) => {
  if (!acc[notif.date]) acc[notif.date] = [];
  acc[notif.date].push(notif);
  return acc;
}, {} as Record<string, Notification[]>);

const Notification: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full min-h-screen bg-teal-900 p-6 text-white">
      {/* Navbar Icons */}
      <div className="flex justify-end gap-4 mb-6">
        <button className="text-xl p-2 hover:text-gray-300" aria-label="Search"><FiSearch /></button>
        <button className="text-xl p-2 hover:text-gray-300" onClick={() => navigate('/notifications')} aria-label="Notifications"><FiBell /></button>
        <button className="text-xl p-2 hover:text-gray-300" onClick={() => navigate('/mail')} aria-label="Mail"><FiMail /></button>
        {/* <button className="text-xl p-2 hover:text-gray-300" aria-label="Dark Mode"><FiMoon /></button> */}
        <button className="text-xl p-2 hover:text-gray-300" onClick={() => navigate("/settings")} aria-label="Settings"><FiSettings /></button>
        <button className="text-xl p-2 hover:text-gray-300" onClick={() => navigate("/discovery")} aria-label="Home"><FiHome /></button>
      </div>

      {/* Notifikasi */}
      {Object.entries(groupedNotifications).map(([date, notifs]) => (
        <div key={date} className="mb-6">
          <h2 className="text-xl font-semibold mb-2">{date}</h2>
          <div className="bg-white rounded-lg p-4 text-gray-900">
            {notifs.map((notif) => (
              <div key={notif.id} className="flex items-center gap-4 py-3 border-b last:border-b-0">
                <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                <p className="flex-1">
                  <span className="font-semibold">{notif.name}</span> wants to add you as a friend
                </p>
                <div className="flex gap-2">
                  <button className="px-4 py-2 bg-orange-500 text-white rounded-lg font-semibold hover:bg-orange-600">Accept</button>
                  <button className="px-4 py-2 bg-gray-600 text-white rounded-lg font-semibold hover:bg-gray-700">Decline</button>
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