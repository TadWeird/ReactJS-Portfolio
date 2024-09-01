import React from 'react'
import 'flowbite';
import WPN_logo from '../assets/others/pn_pronounced_logo.png';

export default function Footsies() {
  return (
    

<footer id="foot" class="bg-gradient-to-r from-indigo-500 to-purple-500">
    <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8 lg:px-8">
        <div class="md:flex md:justify-between">
          <div class="mb-6 md:mb-0">
              <a href="https://github.com/TadWeird" class="flex items-center w-7 h-7">
                  <img src={WPN_logo}/>
                  <span class="self-center text-2xl font-semibold whitespace-nowrap text-white pl-3">PLOPN</span>
              </a>
          </div>
          <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-1">
              <div>
                  <h2 class="mb-6 text-sm font-semibold text-white uppercase dark:text-white">Let's Talk!</h2>
                  <ul class="text-plopnpurple-300 font-medium">
                      <li class ="mb-4">
                          <a href="http://www.linkedin.com/in/jaimejrmaliwat" class="hover:text-white transition-colors duration-200">LinkedIn</a>
                      </li>
                      <li class ="mb-4">
                          <a href="https://jaimemaliwatjr.jobs180.com" class="hover:text-white transition-colors duration-200">Jobs180</a>
                      </li>

                      <li class="mb-4">
                          <a href="https://github.com/TadWeird" class="hover:text-white transition-colors duration-200">Github</a>
                      </li>
                      <li class ="mb-4">
                          <a href="mailto:jaimejrmaliwat@gmail.com" class="hover:text-white transition-colors duration-200">Email</a>
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
              <a href="http://www.linkedin.com/in/jaimejrmaliwat" class="text-plopnpurple-300 hover:text-white dark:hover:text-white transition-colors duration-200">
                 <svg
                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="h-4 w-4">
                    <path fill="currentColor"
                        d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z">
                    </path>
                </svg>
                  <span class="sr-only">LinkedIn</span>
              </a>
              <a href="https://jaimemaliwatjr.jobs180.com" class="text-plopnpurple-300 hover:text-white dark:hover:text-white ms-5 transition-colors duration-200">
                <svg class="w-5 h-5 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.213 9.787a3.391 3.391 0 0 0-4.795 0l-3.425 3.426a3.39 3.39 0 0 0 4.795 4.794l.321-.304m-.321-4.49a3.39 3.39 0 0 0 4.795 0l3.424-3.426a3.39 3.39 0 0 0-4.794-4.795l-1.028.961"/>
                </svg>
                <span class="sr-only">Jobs180</span>
              </a>
              <a href="https://github.com/TadWeird" class="text-plopnpurple-300 hover:text-white dark:hover:text-white ms-5 transition-colors duration-200">
                  <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd"/>
                  </svg>
                  <span class="sr-only">GitHub</span>
              </a>
              <a href="mailto:jaimejrmaliwat@gmail.com" class="text-plopnpurple-300 hover:text-white dark:hover:text-white ms-5 transition-colors duration-200">
                <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l8.1 5.02a3.09 3.09 0 0 0 3.8 0L21 8M5 19h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2z"/>
                </svg>
                <span class="sr-only">Email</span>
              </a>
          </div>
      </div>
    </div>
</footer>

  )
}
