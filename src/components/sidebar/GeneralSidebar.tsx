"use client";

import Link from "next/link";
import Image from "next/image";
import { FiMenu } from "react-icons/fi";
import clsx from "clsx";

const navItems = [
  { name: "Dashboard", path: "/" },
  { name: "Projects", path: "/projects" },
  { name: "Templates", path: "/templates" },
  { name: "Connections", path: "/connections" },
];

export default function GeneralSidebar({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}) {
  return (
    <aside
      className={clsx(
        "bg-black text-white flex flex-col w-72 p-4 h-full transition-transform duration-300 ease-in-out z-40 md:translate-x-0",
        isOpen ? "translate-x-0 fixed" : "-translate-x-full fixed md:relative md:translate-x-0"
      )}
    >
      <div className="flex items-center mb-6">
        <Image
          src="/logo.png"
          alt="Logo"
          width={35}
          height={35}
          className="rounded-full"
        />
        <h1 className="ml-2 text-xl font-['Inika',_serif] tracking-wider">
          QUANTUM APPS
        </h1>
      </div>
      <nav className="space-y-3">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.path}
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-between p-3 bg-gray-800 rounded-md hover:bg-gray-700 transition-colors"
          >
            <div className="flex items-center space-x-2">
              {/* Replace with your preferred icon */}
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
              <span>{item.name}</span>
            </div>
            <FiMenu size={14} />
          </Link>
        ))}
      </nav>
    </aside>
  );
}
