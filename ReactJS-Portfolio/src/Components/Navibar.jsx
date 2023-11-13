import React from 'react'

function Navibar() {
  return (
    // <div>Navibar</div>
    

<nav class=" bg-plopnpurple-100 border-r border-t border-l border-2 border-plopnpurple-300">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="https://tadweird.github.io/Portfolio_SoftDev/" class="flex items-center space-x-3 rtl:space-x-reverse">
        <img src="https://media.discordapp.net/attachments/979722130071646259/1173639062138134620/pn_pronounced_logo.png?ex=6564af8d&is=65523a8d&hm=9b1a4888357d4c1813d58c4797bb0b039e75d665b13f73228fb03e77c4669d48&=&width=625&height=625" class="h-8" alt="Flowbite Logo" />
        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">PLOP'N</span>
    </a>
    {/* <button data-collapse-toggle="navbar-solid-bg" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-solid-bg" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button> */}
    <div class="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
      <ul class="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
        <li>
          <a href="#" class="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-white dark:text-plopnpurple-200 md:dark:hover:text-white dark:hover:text-plopnpurple-200 md:dark:hover:bg-transparent">Home</a>
        </li>
        <li>
          <a href="#" class="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-white dark:text-plopnpurple-200 md:dark:hover:text-white dark:hover:text-plopnpurple-200 md:dark:hover:bg-transparent">About Me</a>
        </li>
        <li>
          <a href="#" class="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-white dark:text-plopnpurple-200 md:dark:hover:text-white dark:hover:text-plopnpurple-200 md:dark:hover:bg-transparent">Skill N' Technologies</a>
        </li>
        <li>
          <a href="#" class="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-white dark:text-plopnpurple-200 md:dark:hover:text-white dark:hover:text-plopnpurple-200 md:dark:hover:bg-transparent">Projects</a>
        </li>
        <li>
          <a href="#" class="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-white dark:text-plopnpurple-200 md:dark:hover:text-white dark:hover:text-plopnpurple-200 md:dark:hover:bg-transparent">Let's Talk!</a>
        </li>
      </ul>
    </div>
  </div>
</nav>


  )
}

export default Navibar