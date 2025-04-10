"use client";

import Link from "next/link";
import Image from "next/image";
import { FiMenu } from "react-icons/fi";
import { useEffect } from "react";

const navItems = [
  { name: "Dashboard", path: "/" },
  { name: "Projects", path: "/projects" },
  { name: "Templates", path: "/templates" },
  { name: "Connections", path: "/connections" },
];

export default function Sidebar({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  return (
    <aside
      className={`fixed md:static top-0 left-0 z-40 w-64 h-full bg-black text-white flex flex-col transform transition-transform duration-300 ease-in-out ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } md:translate-x-0`}
    >
      <div className="p-6 flex items-center">
        <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center">
          <Image
            src="/logo.png"
            alt="Logo"
            width={35}
            height={35}
            className="rounded-full"
          />
        </div>
        <h1 className="ml-2 text-lg font-['Inika',_serif] tracking-wider">
          QUANTUM APPS
        </h1>
      </div>

      <nav className="mt-6 flex-grow">
        <ul className="space-y-2 px-3">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.path}
                className="flex items-center p-3 text-sm rounded-md hover:bg-gray-800 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <span className="mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 11H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2Z" />
                    <path d="M12 11V3H4a2 2 0 0 0-2 2v6" />
                    <path d="M12 11V3h8a2 2 0 0 1 2 2v6" />
                  </svg>
                </span>
                {item.name}
                <span className="ml-auto">
                  <FiMenu size={14} />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
