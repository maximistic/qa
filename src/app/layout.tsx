"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { AppProvider } from "@/contexts/AppContext";
import ChatSidebar from "@/components/sidebar/ChatSidebar";
import GeneralSidebar from "@/components/sidebar/GeneralSidebar";
import Navbar from "@/components/navbar/page";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();

  const isChatRoute = pathname.startsWith("/questions/");
  const isAuthRoute = pathname === "/login" || pathname === "/signup";

  return (
    <html lang="en">
      <body className={inter.className}>
        {isAuthRoute ? (
          <AppProvider>{children}</AppProvider>
        ) : (
          <div className="flex h-screen overflow-hidden">
            {isChatRoute ? (
              <ChatSidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
            ) : (
              <GeneralSidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
            )}
            <button
              className="md:hidden fixed top-2 left-4 z-50 text-black bg-white p-2 rounded shadow cursor-pointer transition-transform hover:scale-105 border border-gray-300"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              <FiMenu size={24} />
            </button>

            <div className="flex-1 flex flex-col overflow-hidden bg-white">
              <Navbar />
              <main className="flex-1 overflow-y-auto pt-14">
                <AppProvider>{children}</AppProvider>
              </main>
            </div>
          </div>
        )}
      </body>
    </html>
  );
}
