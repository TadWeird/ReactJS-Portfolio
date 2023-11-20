import React from 'react'
import 'flowbite';
import { Link, animateScroll as scroll } from 'react-scroll';

function Heero() {
  return (
    
    <section id="hero" class="bg-gradient-to-r from-rose-100 to-teal-100">
    <div class="container mx-auto flex md:px-16 md:py-24  md:flex-row flex-col items-center">
        <div
            class="lg:flex-grow mt-5 md:mt-0 md:w-1.5/2  lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-8 md:mb-0 items-center text-center">
            <h1 class="pt-20 pb-3 font-extrabold text-transparent text-5xl bg-clip-text md:text-6xl lg:text-6xl bg-gradient-to-r from-indigo-500 to-purple-500">
                Welcome To My Profile!
            </h1>
            <h1
                class="py-16 px-5 font-bold text-transparent text-5xl md:text-5xl lg:text-5xl bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">
                My Name Is Jaime D. Maliwat Jr!
            </h1>
            <p class="mb-8 md:pl-0 text-2xl pl-2 pr-2 md:text-base lg:text-2xl leading-relaxed text-gray-500">
            "I'm an Aspiring Front End Developer, Web Developer & UI / UX Designer. Explore my portfolio through its design and web solution integration!"
            </p>
            <a href="https://github.com/TadWeird" class="mt-4 block text-center bg-indigo-500 text-white p-4 rounded-md hover:bg-indigo-600 transition duration-300 font-bold">
                Check My GitHub!
            </a>
        </div>
        
        {/* lg:max-w-lg lg:w-full */}

        <div class=" flex flex-col mb-5 md:mb-0 w-4/6 sm:w-6/12 md:w-11/12 lg:w-10/12 xl:w-full  py-10">
            <img class="object-cover object-center rounded-lg shadow-lg shadow-purple-500/25" alt="hero" src="https://media.discordapp.net/attachments/1092111217230880869/1175091469028175882/ME.JPG?ex=6569f836&is=65578336&hm=6bd1d16704ed1ae0cadedc50c3220a2d44350fdf4c71c3bf723d5534732c7800&=&width=676&height=676"/>
        </div>
    </div>
</section>
    
  )
}

export default Heero