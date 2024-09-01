import React from 'react';
import WPN_logo from '../assets/others/pn_pronounced_logo.png';
import 'flowbite';

function Navibar() {
  return (
    <nav class="bg-gradient-to-r from-indigo-500 to-purple-500 border-gray-500 fixed w-full top-0 z-50">
  <div class=" max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="https://tadweird.github.io/Portfolio_SoftDev/" class="flex items-center space-x-3 rtl:space-x-reverse">
      <img src={WPN_logo} class="h-8" alt="PLOPN" />
      <span class="self-center text-2xl font-semibold whitespace-nowrap text-white">PLOP'N</span>
    </a>
    <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white dark:text-gray-100 hover:bg-white-700 dark:focus:ring-white" aria-controls="navbar-default" aria-expanded="false">
      <span class="sr-only">Open main menu</span>
      <svg class="w-5 h-5 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 17 14">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
      </svg>
    </button>
    <div class="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-white rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 dark:bg-white md:dark:bg-white dark:border-white">

        <li>
          <a href="#hero" class="block py-2 px-3 transition-colors duration-200 hover:bg-white md:hover:bg-transparent md:border-0 md:hover:text-gray-100 md:p-0 text-plopnpurple-400 md:dark:hover:text-blue-500 dark:hover:bg-gray-100 dark:hover:text-white md:dark:hover:bg-transparent">Home</a>
        </li>
        <li>
          <a href="#me" class="block py-2 px-3 transition-colors duration-200 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-100 md:p-0 text-plopnpurple-400 md:dark:hover:text-blue-500 dark:hover:bg-gray-100 dark:hover:text-white md:dark:hover:bg-transparent">About Me</a>
        </li>
        <li>
          <a href="#skills" class="block py-2 px-3 transition-colors duration-200 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-100 md:p-0 text-plopnpurple-400 md:dark:hover:text-blue-500 dark:hover:bg-gray-100 dark:hover:text-white md:dark:hover:bg-transparent">Skills And Technologies</a>
        </li>
        <li>
          <a href="#port" class="block py-2 px-3 transition-colors duration-200 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-100 md:p-0 text-plopnpurple-400 md:dark:hover:text-blue-500 dark:hover:bg-gray-100 dark:hover:text-white md:dark:hover:bg-transparent">Portfolio</a>
        </li>
        <li>
          <a href="#foot" class="block py-2 px-3 transition-colors duration-200 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-100 md:p-0 text-plopnpurple-400 md:dark:hover:text-blue-500 dark:hover:bg-gray-100 dark:hover:text-white md:dark:hover:bg-transparent">Let's Talk</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

  )
}

export default Navibar