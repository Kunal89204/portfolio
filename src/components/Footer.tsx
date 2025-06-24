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
      <div className="mt-2 text-xs text-[#666]">
        Built with <span className="text-blue-500">Next.js</span> &amp; <span className="text-cyan-400">React</span>
      </div>
    </footer>
  )
}

export default Footer
