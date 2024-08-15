import React, { useState, useEffect } from "react";
import { MoonToSunIcon } from "./moon-to-sun-icon";
import { SunToMoonIcon } from "./sun-to-moon-icon";

export function ThemeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = window.localStorage.getItem("theme");
    if (
      storedTheme === "dark" ||
      (!storedTheme &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    }
  }, []);

  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
    const newTheme = document.documentElement.classList.contains("dark")
      ? "dark"
      : "light";
    window.localStorage.setItem("theme", newTheme);
    setIsDarkMode(newTheme === "dark");
  };

  return (
    <button
      onClick={toggleTheme}
      className={`bg-slate-400 dark:bg-slate-800 py-3 px-3 rounded-3xl relative`}
      data-theme-button
    >
      <div className="flex gap-x-5">
        <MoonToSunIcon className="text-yellow-100 transition-all" />
        <SunToMoonIcon className="dark:text-red-950 transition-all" />
      </div>
      <div
        className={`absolute top-1 left-1 w-8 h-8 z-[999] rounded-full transition-all 
          ${
            isDarkMode
              ? "transform translate-x-[110%] bg-slate-300 bg-opacity-80"
              : "bg-slate-800 bg-opacity-70"
          }`}
        data-theme-toggle
      />
    </button>
  );
}
