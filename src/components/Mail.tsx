import React from "react";
import { FiSearch, FiBell, FiMail, FiMoon, FiSettings } from "react-icons/fi";

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
  return (
    <div className="w-full max-w-3xl mx-auto flex flex-col h-screen bg-gray-100">
      {/* Header */}
      <header className="flex justify-between items-center p-4 bg-teal-700 text-white shadow-md">
        <div className="flex gap-2">
          <button className="p-2 rounded-full hover:bg-teal-600">
            <FiSearch size={20} />
          </button>
          <button className="p-2 rounded-full hover:bg-teal-600">
            <FiBell size={20} />
          </button>
          <button className="p-2 rounded-full bg-teal-600">
            <FiMail size={20} />
          </button>
          <button className="p-2 rounded-full hover:bg-teal-600">
            <FiMoon size={20} />
          </button>
          <button className="p-2 rounded-full hover:bg-teal-600">
            <FiSettings size={20} />
          </button>
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