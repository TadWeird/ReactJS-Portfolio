import React from 'react'
import 'flowbite';
import { Link, animateScroll as scroll } from 'react-scroll';

function Heero() {
  return (

    <section id="hero" class="bg-gradient-to-r from-rose-100 to-teal-100">
    <div class="container mx-auto flex md:px-24 md:py-24  md:flex-row flex-col items-center">
        <div
            class="lg:flex-grow mt-5 md:mt-0 md:w-1.5/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1
                class="pt-24 font-extrabold text-transparent text-7xl bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">
                Welcome To My Profile!
            </h1>
            <p class="mb-8 md:pl-0 text-3xl pl-2 pr-2 py-16 leading-relaxed dark:text-gray-300">
            "Knowing That Defeat Does Not Mean Failure, But Knowing It As A Stepping Stone"
            </p>
            <p class="mb-8 md:pl-0 text-3xl pl-2 pr-2 leading-relaxed dark:text-gray-300">
            "I'm an Aspiring Front End Developer and Data Analyst. Explore my portfolio through its design and web solution integration using UI/UX!"
            </p>
            <a href="https://github.com/TadWeird" class="mt-4 block text-center bg-indigo-500 text-white p-4 rounded-md hover:bg-indigo-600 transition duration-300 font-bold">Check My GitHub!</a>
        </div>
        
        <div class="lg:max-w-lg lg:w-full mb-5 md:mb-0 md:w-1/2 w-3/6">
            <img class="object-cover object-center rounded-lg shadow-lg shadow-purple-500/25 " alt="hero" src="https://media.discordapp.net/attachments/1092111217230880869/1175091469028175882/ME.JPG?ex=6569f836&is=65578336&hm=6bd1d16704ed1ae0cadedc50c3220a2d44350fdf4c71c3bf723d5534732c7800&=&width=676&height=676"/>
        </div>
    </div>
</section>
    
  )
}

export default Heero