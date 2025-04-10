"use client";

import { usePathname } from "next/navigation";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const pathname = usePathname();
  const isChatRoute = pathname.startsWith("/questions/");

  if (isChatRoute) {
    return (
      <nav className="w-full h-14 px-4 md:px-6 flex items-center justify-between border-b bg-black shadow-sm z-40 fixed top-0 left-0 right-0">
        <div className="text-lg font-semibold text-white hidden md:flex">QUANTUM APPS</div>

        <div className="hidden md:flex items-center gap-4">
            <div className="bg-white rounded-full flex items-center justify-center gap-1 px-1 py-1">
                <Button variant="ghost" className="px-4 py-2 text-sm bg-black text-white rounded-full">
                    General
                </Button>
                <Button variant="ghost" className="px-4 py-2 text-sm  ">
                    Agent 2
                </Button>
                <Button variant="ghost" className="px-4 py-2 text-sm  ">
                    Agent 3
                </Button>
                <Button variant="ghost" className="px-4 py-2 text-sm  ">
                    Agent 4
                </Button>
            </div>
          <Input
            type="text"
            placeholder="Search"
            className="ml-4 w-48 bg-white text-black placeholder:text-gray-500 focus:ring-0 focus:border-gray-300 rounded-full gap-2 px-1 py-1"
          />
        </div>

        <Avatar>
          <AvatarFallback>U</AvatarFallback>
        </Avatar>
      </nav>
    );
  }

  // Default Navbar
  return (
    <nav className="w-full h-14 px-6 flex items-center justify-between border-b bg-black shadow-sm z-40 fixed top-0 left-0 right-0">
      <div className="text-lg font-semibold text-white">QUANTUM APPS</div>
      <Avatar>
        <AvatarFallback>U</AvatarFallback>
      </Avatar>
    </nav>
  );
}
