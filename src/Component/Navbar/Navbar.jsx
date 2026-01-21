"use client";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import avatarImg from "../../../public/images/placeholder.jpg";
import navlogo from "../../../public/images/logo.webp";
import Image from "next/image";
import NavLink from "./NavLink";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navs = ["home", "foods", "reviews"];
  const links = (
    <>
      {navs.map((nav, i) => (
        <li key={i}>
          <NavLink
            href={nav === "home" ? `/` : `/${nav}`}
            className={`uppercase text-[13px] font-bold`}
          >
            {nav}
          </NavLink>
        </li>
      ))}
    </>
  );

  return (
    <div className="fixed navbar z-50 dark:bg-[#191C24] shadow-sm py-0 md:py-2 lg:py-5">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Link href={`/`} className="flex items-center">
          <Image src={navlogo} alt="logo" width={120} height="auto" />
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>

      <div className="navbar-end">
        <div className="relative">
          <div className="flex flex-row items-center gap-3">
            {/* Dropdown btn */}
            <div
              onClick={() => setIsOpen(!isOpen)}
              className="p-4 md:py-1 md:px-2 border border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition"
            >
              <AiOutlineMenu />
              <div className="hidden md:block aspect-square">
                {/* Avatar */}
                <Image
                  className="object-center rounded-full"
                  referrerPolicy="no-referrer"
                  src={avatarImg}
                  alt="profile"
                  height="30"
                  width="30"
                />
              </div>
            </div>
          </div>
          {isOpen && (
            <div className="absolute rounded-xl shadow-md bg-base-100 w-[40vw] md:w-[10vw] overflow-hidden right-0 top-12 text-sm border border-base-300">
              <div className="flex flex-col cursor-pointer">
                {isLoggedIn ? (
                  <>
                    <Link
                      href="/dashboard"
                      className="px-4 py-3 hover:bg-base-200 transition font-semibold"
                    >
                      Dashboard
                    </Link>
                    <div className="px-4 py-3 hover:bg-base-200 transition font-semibold cursor-pointer">
                      Logout
                    </div>
                  </>
                ) : (
                  <>
                    <Link
                      href="/login"
                      className="px-4 py-3 hover:bg-base-200 transition font-semibold"
                    >
                      Login
                    </Link>
                    <Link
                      href="/signup"
                      className="px-4 py-3 hover:bg-base-200 transition font-semibold"
                    >
                      Sign Up
                    </Link>
                  </>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
