"use client";
import React from "react";
import Image from "next/image";
import logo from "@/public/logoWhite.svg";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoChevronForward } from "react-icons/io5";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

const Navbar = () => {
  const pathname = usePathname(); // Get the current path

  // Function to check if the current link is active
  const isActive = (path: string) => pathname === path;

  return (
    <div className="flex w-full h-fit items-center justify-center space-x-32 pt-10 bg-black text-white">
      {/* Logo Section */}
      <div id="logo">
        <Image src={logo} alt="Logo" width={137} height={38.47} />
      </div>

      {/* Navigation Links */}
      <div className="flex justify-between space-x-14 items-center">
        <Link
          href="/"
          className={twMerge(
            clsx(
              isActive("/") ? "font-medium" : "font-light",
              isActive("/") && "border-b-2 border-white pb-1"
            ),
            "text-white"
          )}
        >
          Home
        </Link>
        <Link
          href="/about-us"
          className={twMerge(
            clsx(
              isActive("/about-us") ? "font-medium" : "font-light",
              isActive("/about-us") && "border-b-2 border-white pb-1"
            ),
            "text-white"
          )}
        >
          About Us
        </Link>
        <Link
          href="/services"
          className={twMerge(
            clsx(
              isActive("/services") ? "font-medium" : "font-light",
              isActive("/services") && "border-b-2 border-white pb-1"
            ),
            "text-white"
          )}
        >
          Services
        </Link>
        <Link
          href="https://agileaihub.ai/" // External link
          className="text-white font-light hover:underline"
        >
          AI Hub
        </Link>
        <Link
          href="/resources"
          className={twMerge(
            clsx(
              isActive("/resources") ? "font-medium" : "font-light",
              isActive("/resources") && "border-b-2 border-white pb-1"
            ),
            "text-white"
          )}
        >
          Resources
        </Link>
      </div>

      {/* Contact Button */}
      <div className="bg-white inline-flex items-center space-x-1 rounded-sm text-black px-4 py-2">
        <Link href="/about-us">Contact Us</Link>
        <IoChevronForward />
      </div>
    </div>
  );
};

export default Navbar;
