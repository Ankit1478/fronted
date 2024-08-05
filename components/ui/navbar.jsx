import React from 'react';

export default function Navbar() {
  return (
    <>
      <header className="flex justify-between items-center p-4 md:p-6 lg:p-8 bg-white relative">
          <div className="text-lg  md:text-xl lg:text-2xl font-serif">
            friend
          </div>
        
        <nav className="flex items-center space-x-4 md:space-x-6 lg:space-x-8 text-sm md:text-base lg:text-lg font-serif">
          <a href="/blog" className="hover:underline">blog</a>
          <a href="/product" className="hover:underline">product</a>
          <a href="/pre-order" className="inline-flex items-center px-4 py-2 bg-gray-200 text-black rounded-full hover:bg-gray-300">
            pre-order
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"></path>
            </svg>
          </a>
        </nav>
      </header>
      <div className="w-full flex justify-center mt-2">
        <div className="w-full max-w-screen-lg h-[2px] bg-[#f1f5f9]"></div>
      </div>
    </>
  );
}