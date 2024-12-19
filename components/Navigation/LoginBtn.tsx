"use client";

import { useState, useRef, useEffect } from "react";
import { IoLogInOutline } from "react-icons/io5";
import { LuCircleUserRound, LuSettings, LuLogOut } from "react-icons/lu";
import styles from "./LoginBtn.module.css";

export default function LoginBtn() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  // const toggleLoginForm = () => setFormOpen(!FormOpen);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
  const handleClickOutsideOfDropdown = (e: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(e.target as Node)
    ) {
      setDropdownOpen(false);
    }
  };
  useEffect(() => {
    if (dropdownOpen) {
      document.addEventListener("mousedown", handleClickOutsideOfDropdown);
    } else {
      document.removeEventListener("mousedown", handleClickOutsideOfDropdown);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutsideOfDropdown);
    };
  }, [dropdownOpen]);
  return (
    <div className="relative" ref={dropdownRef}>
      <button
        className="border-2 border-y-gray-50 rounded-md w-auto h-auto md:text-2xl py-1 px-2"
        onClick={toggleDropdown}
        // ref={dropdownRef}
        id="hamburgerIcon"
      >
        ☰
      </button>
      <div
        id="dropdownTable"
        className={`${styles.dropdown} ${
          dropdownOpen ? styles.dropdownOpen : ""
        }`}
      >
        <ul>
          <div id="userProfile" className={styles.dropdownItem}>
            <div>
              <LuCircleUserRound className={styles.dropdownIcon} />
            </div>
            <div>
              <li className={styles.dropdownText}>Profile</li>
            </div>
          </div>
          <div id="userSettings" className={styles.dropdownItem}>
            <div>
              <LuSettings className={styles.dropdownIcon} />
            </div>
            <div>
              <li className={styles.dropdownText}>Settings</li>
            </div>
          </div>
          <div id="userLogout" className={styles.dropdownItem}>
            <div>
              <LuLogOut className={styles.dropdownIcon} />
            </div>
            <div>
              <li className={styles.dropdownText}>Logout</li>
            </div>
          </div>
        </ul>
      </div>
      {/* <button
        role="button"
        className="text-2xl font-semibold text-slate-100"
        onClick={toggleLoginForm}
      >
        <div className="flex items-center">
          <label
            htmlFor=""
            className="me-2 hidden md:flex items-center justify-center "
          >
            Login
          </label>
          <IoLogInOutline size={38} />
        </div>
      </button> */}
    </div>
  );
}
