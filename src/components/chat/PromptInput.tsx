"use client";
import { useState } from "react";
import { FiPaperclip, FiSend, FiList } from "react-icons/fi";

export default function PromptInput() {
  const [prompt, setPrompt] = useState("");
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setPrompt("");
  };
  
  return (
    <div className="bg-gray-100 rounded-2xl p-4 w-full max-w-3xl mx-auto">
      <form onSubmit={handleSubmit} className="flex flex-col">
        <div className="min-h-12 mb-2">
          <input
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Type your prompt here"
            className="w-full bg-transparent border-none outline-none text-gray-700 placeholder-gray-500"
          />
        </div>
        <div className="flex justify-between">
          <div className="flex gap-2">
            <button type="button" className="p-3 rounded-full bg-gray-800 text-white cursor-pointer transition-transform duration-200 hover:bg-black hover:scale-105">
              <FiPaperclip size={18} />
            </button>
            <button type="button" className="p-3 rounded-full bg-gray-800 text-white cursor-pointer transition-transform duration-200 hover:bg-black hover:scale-105">
              <FiList size={18} />
            </button>
          </div>
          <button 
            type="submit" 
            className="p-3 rounded-full bg-gray-800 text-white cursor-pointer transition-transform duration-200 hover:bg-black hover:scale-105"
            disabled={!prompt.trim()}
          >
            <FiSend size={18} />
          </button>
        </div>
      </form>
    </div>
  );
}