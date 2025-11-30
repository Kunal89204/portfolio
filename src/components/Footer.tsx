import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <footer className="w-full my-20 bg-transparent text-[#a0a0a0] py-6 flex flex-col items-center ">
      <div className="flex items-center gap-2 text-sm">
        <span>&copy; {new Date().getFullYear()} Kunal Khandelwal</span>
        <span className="mx-2">·</span>
        <a
          href="https://github.com/kunal89204"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition-colors"
        >
          GitHub
        </a>
        <span className="mx-2">·</span>
        <a
          href="https://linkedin.com/in/kunal-khandelwal-19a52127b"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition-colors"
        >
          LinkedIn
        </a>
      </div>
      <div className="mt-2 text-xs text-[#666] flex items-center gap-2">
        <p className="text-white">Design</p>
        <a
          href="https://wpriverthemes.com/landing/gridx-html/index.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src={"https://wpriverthemes.com/landing/gridx-html/assets/images/logo.svg"} alt="nextjs" width={1000} height={1000} className="w-10" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
