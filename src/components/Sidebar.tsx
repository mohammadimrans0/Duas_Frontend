"use client";

import {
  Home,
  BookOpen,
  Info,
  Mail,
  Heart,
  Menu,
} from "lucide-react";

export default function Sidebar() {
  return (
    <nav className="bg-gray-800 text-white p-4 h-screen flex flex-col justify-between items-center">
      {/* Top: Logo or Image */}
      <div>
       <span className="text-5xl">📚</span>
      </div>

      {/* Middle: Navigation Icons */}
      <ul className="flex flex-col space-y-12 items-center">
        <li>
          <Home className="w-6 h-6 hover:text-green-400 cursor-pointer" />
        </li>
        <li>
          <BookOpen className="w-6 h-6 hover:text-green-400 cursor-pointer" />
        </li>
        <li>
          <Info className="w-6 h-6 hover:text-green-400 cursor-pointer" />
        </li>
        <li>
          <Mail className="w-6 h-6 hover:text-green-400 cursor-pointer" />
        </li>
        <li>
          <Heart className="w-6 h-6 hover:text-green-400 cursor-pointer" />
        </li>
      </ul>

      {/* Bottom: Hamburger Menu */}
      <div>
        <Menu className="w-7 h-7 hover:text-green-400 cursor-pointer" />
      </div>
    </nav>
  );
}
