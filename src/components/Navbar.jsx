import React from "react";
import logo from "../assets/AshLogo.png";
import { FaGithub, FaInstagram, FaLinkedinIn, FaUserTie } from "react-icons/fa";
import {
  GITHUB_HANDLE,
  INSTAGRAM_HANDLE,
  LINKEDIN_HANDLE,
  RESUME_URL,
} from "../constants";

export const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-08 items-center">
        <a href="/">
          <img className="mx-2 w-45 h-10" src={logo} alt="logo" />
        </a>
      </div>
      <div className="m-8 flex items-center justify-center gap-8 text-2xl">
        <a href={LINKEDIN_HANDLE} target="_blank">
          <FaLinkedinIn size={30} />
        </a>
        <a href={GITHUB_HANDLE} target="_blank">
          <FaGithub size={30} />
        </a>
        <a href={INSTAGRAM_HANDLE} target="_blank">
          <FaInstagram size={30} />
        </a>
        <a href={RESUME_URL} target="_blank">
          <FaUserTie size={30} />
        </a>
      </div>
    </nav>
  );
};
