import React from "react";
import { FiSearch, FiBell, FiMail, FiSettings } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

type Conversation = {
  id: number;
  name: string;
  lastMessage: string;
  avatar: string;
};

const conversations: Conversation[] = [
  { id: 1, name: "Firdaus", lastMessage: "salah", avatar: "/images/avatar-placeholder.jpg" },
  { id: 2, name: "Firdaus", lastMessage: "salah", avatar: "/images/avatar-placeholder.jpg" },
  { id: 3, name: "Firdaus", lastMessage: "salah", avatar: "/images/avatar-placeholder.jpg" },
  { id: 4, name: "Firdaus", lastMessage: "salah", avatar: "/images/avatar-placeholder.jpg" },
  { id: 5, name: "Firdaus", lastMessage: "salah", avatar: "/images/avatar-placeholder.jpg" },
];

const Mail: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full max-w-3xl mx-auto flex flex-col h-screen bg-gray-100">
      {/* Header */}
      <header className="flex justify-between items-center p-4 bg-teal-700 text-white shadow-md">
      <div className="flex justify-end gap-4 mb-6">
        <button className="text-xl p-2 hover:text-gray-300" aria-label="Search"><FiSearch /></button>
        <button className="text-xl p-2 hover:text-gray-300" onClick={() => navigate('/notifications')} aria-label="Notifications"><FiBell /></button>
        <button className="text-xl p-2 hover:text-gray-300" onClick={() => navigate('/mail')} aria-label="Mail"><FiMail /></button>
        <button className="text-xl p-2 hover:text-gray-300" onClick={() => navigate("/settings")} aria-label="Settings"><FiSettings /></button>
      </div>
      </header>

      {/* Conversation List */}
      <main className="flex-1 overflow-y-auto p-4">
        <div className="bg-white rounded-lg shadow-md">
          {conversations.map((conversation) => (
            <div
              key={conversation.id}
              className="flex items-center p-4 border-b last:border-b-0 cursor-pointer hover:bg-gray-100"
            >
              <div className="w-12 h-12 mr-4">
                <img
                  src={conversation.avatar}
                  alt={conversation.name}
                  className="w-full h-full rounded-full bg-gray-300"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-semibold text-red-500">{conversation.name}</span>
                <span className="text-gray-500 text-sm">You: {conversation.lastMessage}</span>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Mail;