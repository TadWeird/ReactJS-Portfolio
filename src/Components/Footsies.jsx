import React from 'react'
import 'flowbite';

export default function Footsies() {
  return (
    

<footer id="foot" class="bg-gradient-to-r from-indigo-500 to-purple-500">
    <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div class="md:flex md:justify-between">
          <div class="mb-6 md:mb-0">
              <a href="https://flowbite.com/" class="flex items-center">
                  <img src="https://cdn.discordapp.com/attachments/979722130071646259/1173639062138134620/pn_pronounced_logo.png?ex=6564af8d&is=65523a8d&hm=9b1a4888357d4c1813d58c4797bb0b039e75d665b13f73228fb03e77c4669d48&" class="h-8 me-3" alt="FlowBite Logo" />
                  <span class="self-center text-2xl font-semibold whitespace-nowrap text-white">PLOPN</span>
              </a>
          </div>
          <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                  <h2 class="mb-6 text-sm font-semibold text-white uppercase dark:text-white">Let's Talk!</h2>
                  <ul class="text-plopnpurple-300 font-medium">
                      <li class="mb-4">
                          <a href="https://github.com/TadWeird" class="hover:text-white transition-colors duration-200">Github</a>
                      </li>
                      <li class ="mb-4">
                          <a href="https://discordapp.com/users/438675409349902346" class="hover:text-white transition-colors duration-200">Discord</a>
                      </li>
                      <li class ="mb-4">
                          <a href="www.linkedin.com/in/jaime-jr-maliwat-7685b52a0" class="hover:text-white transition-colors duration-200">Linked In</a>
                      </li>
                      <li class ="mb-4">
                          <a data-te-clipboard-text="This text is from data-te-attr!" class="hover:text-white transition-colors duration-200">jaimejrmaliwat@gmail.com</a>
                      </li>
                  </ul>
              </div>
              
          </div>
      </div>
      <hr class="my-6 border-gray-100 sm:mx-auto dark:border-white lg:my-8" />
      <div class="sm:flex sm:items-center sm:justify-between">
          <span class="text-sm text-white sm:text-center dark:text-white">© 2023 <a href="tadweird.github.io/Portfolio_SoftDev/" class="hover:underline">PLOP'N™</a>. All Rights Reserved.
          </span>
          <div class="flex mt-4 sm:justify-center sm:mt-0">
              <a href="#" class="text-plopnpurple-300 hover:text-white dark:hover:text-white transition-colors duration-200">
                 <svg
                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="h-4 w-4">
                    <path fill="currentColor"
                        d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z">
                    </path>
                </svg>
                  <span class="sr-only">Linked In</span>
              </a>
              <a href="https://discordapp.com/users/438675409349902346" class="text-plopnpurple-300 hover:text-white dark:hover:text-white ms-5 transition-colors duration-200">
                  <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 21 16">
                        <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z"/>
                    </svg>
                  <span class="sr-only">Discord community</span>
              </a>
              <a href="https://github.com/TadWeird" class="text-plopnpurple-300 hover:text-white dark:hover:text-white ms-5 transition-colors duration-200">
                  <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd"/>
                  </svg>
                  <span class="sr-only">GitHub account</span>
              </a>
              {/* <a class="text-plopnpurple-300 hover:text-white dark:hover:text-white ms-5 transition-colors duration-200">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 icon icon-tabler icon-tabler-brand-gmail" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M16 20h3a1 1 0 0 0 1 -1v-14a1 1 0 0 0 -1 -1h-3v16z" /> <path d="M5 20h3v-16h-3a1 1 0 0 0 -1 1v14a1 1 0 0 0 1 1z" /> <path d="M16 4l-4 4l-4 -4" /> <path d="M4 6.5l8 7.5l8 -7.5" /> </svg>
                  <span class="sr-only">Google Email Foot</span>
              </a> */}
          </div>
      </div>
    </div>
</footer>

  )
}
