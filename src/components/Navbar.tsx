"use client";

export default function Navbar() {
    return (
        <nav className="bg-gray-800 text-white cursor-pointer p-4">
        <div className="container mx-auto flex justify-between items-center">
            <div className="flex flex-col justify-center hover:text-green-500">
            <span className="text-xl font-bold">Daily Dua & Ruqyah</span>
            <span className="text-md">Hisnul Muslim</span>
            </div>
            <ul className="flex space-x-4 items-center">
            <li><a href="#" className="hover:text-green-400">Home</a></li>
            <li><a href="#" className="hover:text-green-400">Categories</a></li>
            <li><a href="#" className="hover:text-green-400">About</a></li>
            <li><button className="bg-green-500 hover:bg-lime-500 rounded-3xl cursor-pointer px-4 py-2">Support Us</button></li>
            </ul>
        </div>
        </nav>
    );
}