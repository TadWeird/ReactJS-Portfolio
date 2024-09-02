import React from 'react'
import html_logo from '../assets/showcase/HTML5.png'
import css_logo from '../assets/showcase/css3.png'
import cpp_logo from '../assets/showcase/cpp.png'
import java_logo from '../assets/showcase/java.png'
import js_logo from '../assets/showcase/js.png'
import py_logo from '../assets/showcase/py.png'
import { Link, animateScroll as scroll } from 'react-scroll';

export default function SnT() {
  return (

    <body id="skills" class="bg-gradient-to-r from-rose-100 to-teal-100 min-h-screen flex flex-col items-center justify-center md:px-4 md:py-4">

    <div class="md:px-32 w-11/12">
        <h1 class=" pt-24 pb-10 font-bold text-transparent text-6xl bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500 text-center"> Skills & Technology </h1>
        <p class=" pt-1 pb-10 text-3xl text-gray-700 text-center"> "Here Are Some Of The Languages And Platforms I am Currently Learning For My Career" </p>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5 md:px-32 w-9/12 md:w-9/12">

        <div class="bg-white p-4 rounded-lg shadow-md transform transition-transform hover:scale-105">
            <img class="w-full h-auto object-cover mb-2"
                src={html_logo}
                alt="Card 1 Image" />
        </div>

        <div class="bg-white p-4 rounded-lg shadow-md transform transition-transform hover:scale-105">
            <img class="w-full h-auto object-cover mb-2"
                src={css_logo}
                alt="Card 2 Image" />
        </div>

        <div class="bg-white p-4 rounded-lg shadow-md transform transition-transform hover:scale-105">
            <img class="w-full h-auto object-cover mb-2"
                src={cpp_logo}
                alt="Card 3 Image" />
        </div>

        <div class="bg-white p-4 rounded-lg shadow-md transform transition-transform hover:scale-105">
            <img class="w-full h-auto object-cover mb-2"
                src={java_logo}
                alt="Card 4 Image" />
        </div>

        <div class="bg-white p-4 rounded-lg shadow-md transform transition-transform hover:scale-105">
            <img class="w-full h-auto object-cover mb-2"
                src={js_logo}
                alt="Card 5 Image" />
        </div>

        <div class="bg-white p-4 rounded-lg shadow-md transform transition-transform hover:scale-105">
            <img class="w-full h-auto object-cover mb-2"
                src={py_logo}
                alt="Card 5 Image" />
        </div>
    </div>
</body>

  )
}
