import React from 'react'
import 'flowbite';

export default function Portfolio() {
  return (

    <body class="bg-gradient-to-r from-rose-100 to-teal-100 min-h-screen flex flex-col items-center justify-center md:py-60">

    <div class="text-center mb-8">
        <h2 class="tracking-tight font-extrabold text-transparent text-7xl bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500 md:py-2.5 ">Projects n' Portfolios!</h2>
        <p class="text-3xl leading-relaxed dark:text-gray-300">
            "Here are some of the works that I have made and collaborated with"
        </p>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 md:px-32 w-1/2">
        {/* <!-- Card 1 --> */}
        <div class="bg-white p-4 rounded-lg shadow-md transform transition-transform hover:scale-105">
            <img class="w-full h-auto object-cover mb-2"
                src="https://cdn.discordapp.com/attachments/979722130071646259/1175162921203007518/Browser_PH.png?ex=656a3ac1&is=6557c5c1&hm=c60029862dfd45d2425897e57111085ef4dcb972a9f91f8cd4170fef2b3697ac&"
                alt="Card 1 Image" />
            <a href="https://example.com" class="mt-4 block text-center bg-indigo-500 text-white p-2 rounded-md hover:bg-indigo-600 transition duration-300">Visit Website</a>
        </div>

        {/* <!-- Card 2 --> */}
        <div class="bg-white p-4 rounded-lg shadow-md transform transition-transform hover:scale-105">
            <img class="w-full h-auto object-cover mb-2"
                src="https://cdn.discordapp.com/attachments/979722130071646259/1175144404055494806/CSS1.png?ex=656a2983&is=6557b483&hm=7e10e3ca4a6aaf7920acec00864bb4c04486d6c74059e8966d5a92e7240cfa14&"
                alt="Card 2 Image" />
            <a href="https://example.com" class="mt-4 block text-center bg-indigo-500 text-white p-2 rounded-md hover:bg-indigo-600 transition duration-300">Visit Website</a>
        </div>

        {/* <!-- Card 3 --> */}
        <div class="bg-white p-4 rounded-lg shadow-md transform transition-transform hover:scale-105">
            <img class="w-full h-auto object-cover mb-2"
                src="https://cdn.discordapp.com/attachments/979722130071646259/1175144404416217099/HTML5.png?ex=656a2983&is=6557b483&hm=4bcce3f984d2a8e032cec78b33a1b4f711079bd9179c0251f9a1cdefea2ad876&"
                alt="Card 3 Image" />
            <a href="https://example.com" class="mt-4 block text-center bg-indigo-500 text-white p-2 rounded-md hover:bg-indigo-600 transition duration-300">Visit Website</a>
        </div>

        {/* <!-- Card 4 --> */}
        <div class="bg-white p-4 rounded-lg shadow-md transform transition-transform hover:scale-105">
            <img class="w-full h-auto object-cover mb-2"
                src="https://cdn.discordapp.com/attachments/979722130071646259/1175144405171196014/javascript1.png?ex=656a2983&is=6557b483&hm=456f3125356ce5fdf66074ddb95bdaa7a1fdeb18e296a96b351b05caaea7e1f4&"
                alt="Card 4 Image" />
            <a href="https://example.com" class="mt-4 block text-center bg-indigo-500 text-white p-2 rounded-md hover:bg-indigo-600 transition duration-300">Visit Website</a>
        </div>
    </div>

</body>
//     <body class="bg-gradient-to-r from-rose-100 to-teal-100 min-h-screen flex flex-col items-center justify-center">

//     <div class="text-center mb-8">
//         <h2 class="tracking-tight font-extrabold text-transparent text-7xl bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500 md:py-2.5 pt-10">Projects n' Portfolios!</h2>
//         <p class="text-3xl leading-relaxed dark:text-gray-300">
//             "Here are some of the works that I have made and collaborated with"
//         </p>
//     </div>

//     <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 md:px-32 w-8/12">
//         {/* <!-- Card 1 --> */}
//         <div class="bg-white p-4 rounded-lg shadow-md transform transition-transform hover:scale-105">
//             <img class="w-full h-auto object-cover mb-2"
//                 src="https://cdn.discordapp.com/attachments/979722130071646259/1175144403749326878/PY1.png?ex=656a2982&is=6557b482&hm=1d463f1367a7d85670542e249ec4d4993ff589a44a26ca1cc4eda7174e3ea2d2&"
//                 alt="Card 1 Image" />

//         </div>

//         {/* <!-- Card 2 --> */}
//         <div class="bg-white p-4 rounded-lg shadow-md transform transition-transform hover:scale-105">
//             <img class="w-full h-auto object-cover mb-2"
//                 src="https://cdn.discordapp.com/attachments/979722130071646259/1175144404055494806/CSS1.png?ex=656a2983&is=6557b483&hm=7e10e3ca4a6aaf7920acec00864bb4c04486d6c74059e8966d5a92e7240cfa14&"
//                 alt="Card 2 Image" />
//         </div>

//         {/* <!-- Card 3 --> */}
//         <div class="bg-white p-4 rounded-lg shadow-md transform transition-transform hover:scale-105">
//             <img class="w-full h-auto object-cover mb-2"
//                 src="https://cdn.discordapp.com/attachments/979722130071646259/1175144404416217099/HTML5.png?ex=656a2983&is=6557b483&hm=4bcce3f984d2a8e032cec78b33a1b4f711079bd9179c0251f9a1cdefea2ad876&"
//                 alt="Card 3 Image" />
//         </div>

//         {/* <!-- Card 4 --> */}
//         <div class="bg-white p-4 rounded-lg shadow-md transform transition-transform hover:scale-105">
//             <img class="w-full h-auto object-cover mb-2"
//                 src="https://cdn.discordapp.com/attachments/979722130071646259/1175144405171196014/javascript1.png?ex=656a2983&is=6557b483&hm=456f3125356ce5fdf66074ddb95bdaa7a1fdeb18e296a96b351b05caaea7e1f4&"
//                 alt="Card 4 Image" />
//         </div>
//     </div>
// </body>
  )
}
