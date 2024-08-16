import React, { useRef } from "react";
import { ExternalLink } from "./external-link.tsx"; // Ensure correct path to ExternalLink component
import { ThemeToggle } from "./theme-toggle.tsx"; // Ensure correct path to ThemeToggle component

export const Navbar = () => {
  return (
    <nav className="flex flex-col justify-center sticky top-0 bottom-0 h-screen">
      <div className="flex flex-col items-center overflow-y-scroll scrollbar-none">
        <div className="py-5">
          <img
            className="rounded-[50%] shadow-lg grayscale"
            src="/me.png"
            alt="PB"
          />
        </div>
        <div className="mb-6">
          <ThemeToggle></ThemeToggle>
        </div>
        <div className="w-full external">
          <h3 className="m-0">Externe Links</h3>
          <ExternalLink></ExternalLink>
        </div>
        <div className="w-full">
          <h3 className="m-0">On This Page</h3>
          <ul>
            <li className="my-5 mx-0 rounded-lg hover:bg-slate-400 dark:hover:bg-slate-800">
              <a
                href="#hero"
                className="p-4 inline-block w-full h-full mx-auto my-0"
              >
                Home
              </a>
            </li>
            <li className="my-5 mx-0 rounded-lg hover:bg-slate-400 dark:hover:bg-slate-800">
              <a
                href="#skills"
                className="p-4 inline-block w-full h-full mx-auto my-0"
              >
                Skills
              </a>
            </li>
            <li className="my-5 mx-0 rounded-lg hover:bg-slate-400 dark:hover:bg-slate-800">
              <a
                href="#projects"
                className="p-4 inline-block w-full h-full mx-auto my-0"
              >
                Projekte
              </a>
            </li>
            <li className="my-5 mx-0 rounded-lg hover:bg-slate-400 dark:hover:bg-slate-800">
              <a
                target="_self"
                href="#timeline"
                className="p-4 inline-block w-full h-full mx-auto my-0"
              >
                Lebenslauf
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
