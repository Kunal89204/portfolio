"use client";
import React from "react";

import { Mail } from "lucide-react";
import { BsGithub } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa6";

const Contact = () => {
  const socialLinks = [
    {
      icon: <Mail size={30} />,
      link: "me@kunalkhandelwal.dev",
      label: "Mail me",
    },
    {
      icon: <BsGithub size={30} />,
      link: "https://github.com/kunal89204",
      label: "GitHub",
    },
    {
      icon: <FaLinkedin size={30} />,
      link: "https://www.linkedin.com/in/kunal-khandelwal-19a52127b/",
      label: "LinkedIn",
    },
  ];
  return (
    <div className="px-6 lg:px-4  max-w-[1200px] mx-auto mt-20 flex flex-col items-center">
      <div className="flex gap-20 w-full mt-14">
        <div className="w-1/3">
          <h3 className="text-xl font-semibold">Contact Info</h3>

          {socialLinks.map((link) => (
            <div key={link.label} className="flex gap-4 py-6">
              <div className="p-5 rounded-lg bg-gradient-to-br from-[#202020] to-[#090909] border border-[#202020] aspect-square flex items-center justify-center">
                {link.icon}
              </div>
              <div>
                <p className="text-[#505050] font-semibold">{link.label}</p>
                <a href={link.link} target="_blank" rel="noopener noreferrer">
                  {link.link}
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="gray-gradient p-10 rounded-3xl border w-2/3">
          <div>
            <h2 className="text-5xl">
              Let&apos;s work <span>together</span>
            </h2>
          </div>

          <div className="flex flex-col gap-4 py-4 mt-4 relative z-30">
            <input
              type="text"
              placeholder="Name"
              className="bg-gradient-to-br focus:outline-0 from-[#303030] to-[#181818]  rounded-lg p-4"
            />
            <input
              type="email"
              placeholder="Email"
              className="bg-gradient-to-br focus:outline-0 from-[#303030] to-[#181818]  rounded-lg p-4"
            />
            <textarea
              placeholder="Message"
              className="bg-gradient-to-br focus:outline-0 from-[#303030] to-[#181818]  rounded-lg p-4 resize-none h-40"
            />
            <button className="bg-[#303030] font-semibold text-sm hover:bg-white hover:text-black transition-all duration-300 text-white rounded-lg p-4">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
