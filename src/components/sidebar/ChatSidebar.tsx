"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { FiSend } from "react-icons/fi";
import clsx from "clsx";

export default function ChatSidebar({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}) {
  const [messages, setMessages] = useState([
    { type: "bot", text: "Hello! Ask me anything about data integration." },
  ]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;

    const newMessages = [
      ...messages,
      { type: "user", text: input },
      { type: "bot", text: "Thinking..." },
    ];
    setMessages(newMessages);
    setInput("");

    setTimeout(() => {
      setMessages((msgs) => [
        ...msgs.slice(0, -1),
        { type: "bot", text: "This is a dummy reply. API will be connected later." },
      ]);
    }, 1000);
  };

  // Close sidebar on route change (mobile)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsOpen(true);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [setIsOpen]);

  return (
    <aside
      className={clsx(
        "w-80 h-full bg-black text-white flex flex-col z-40 transition-transform duration-300 md:translate-x-0",
        isOpen ? "translate-x-0 fixed md:relative" : "-translate-x-full fixed md:translate-x-0 md:relative"
      )}
    >
      <div className="flex items-center justify-between p-4 bg-gray-950 border-b border-gray-800">
        <Image src="/logo.png" alt="Logo" width={30} height={30} />
        <div className="space-x-2">
          <button>🏠</button>
          <button>🔳</button>
          <button>📄</button>
        </div>
      </div>

      <div className="p-4">
        <button
          onClick={() => {
            setMessages([{ type: "bot", text: "Hello! Ask me anything about data integration." }]);
            setIsOpen(false);
          }}
          className="w-full bg-gray-800 hover:bg-gray-700 py-2 rounded-md mb-4"
        >
          + New Chat
        </button>
      </div>

      <div className="flex-1 overflow-y-auto space-y-2 px-4 pb-4">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`p-3 rounded-lg ${
              msg.type === "user"
                ? "bg-gray-700 text-right"
                : "bg-yellow-100 text-black"
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>

      <div className="p-4 flex items-center bg-black gap-2 border-t border-gray-800">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your prompt here..."
          className="flex-1 bg-gray-900 text-white px-4 py-2 rounded-md outline-none"
        />
        <button onClick={sendMessage} className="p-2 bg-gray-800 rounded-md">
          <FiSend />
        </button>
      </div>
    </aside>
  );
}
