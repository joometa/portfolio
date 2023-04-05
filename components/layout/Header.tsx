import React from "react";
import Link from "next/link";
import { DarkModeToggleButton } from "./DarkModeToggleButton";

export function Header() {
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link href="/">
          <span className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-10 h-10 text-white p-2 bg-orange-400 rounded-full"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
              />
            </svg>
            <span className="ml-3 text-xl">joometa</span>
          </span>
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link href="/">
            <span className="mr-5 hover:text-gray-900">Home</span>
          </Link>
          <Link href="/skill">
            <span className="mr-5 hover:text-gray-900">Skill</span>
          </Link>
          <Link href="/projects">
            <span className="mr-5 hover:text-gray-900">Projects</span>
          </Link>
          <Link href="/contact">
            <span className="mr-5 hover:text-gray-900">Contact</span>
          </Link>
        </nav>
        <DarkModeToggleButton />
      </div>
    </header>
  );
}
