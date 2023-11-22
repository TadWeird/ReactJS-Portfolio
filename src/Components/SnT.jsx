import React from 'react'
import { Link, animateScroll as scroll } from 'react-scroll';

export default function SnT() {
  return (

    <body id="skills" class="bg-gradient-to-r from-rose-100 to-teal-100 min-h-screen flex flex-col items-center justify-center md:px-4 md:py-4">

    <div class="md:px-32 w-11/12">
        <h1 class=" pt-24 pb-10 font-bold text-transparent text-6xl bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500 text-center"> Skills & Technology </h1>
        <p class=" pt-1 pb-10 text-3xl text-gray-700 text-center"> "Here Are Some Of The Languages And Platforms I am Currently Learning For My Career" </p>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-5 xl:grid-cols-3 gap-5 md:px-32 w-9/12">

        <div class="bg-white p-4 rounded-lg shadow-md transform transition-transform hover:scale-105">
            <img class="w-full h-auto object-cover mb-2"
                src="https://cdn.discordapp.com/attachments/979722130071646259/1175144403749326878/PY1.png?ex=656a2982&is=6557b482&hm=1d463f1367a7d85670542e249ec4d4993ff589a44a26ca1cc4eda7174e3ea2d2&"
                alt="Card 1 Image" />
        </div>

        <div class="bg-white p-4 rounded-lg shadow-md transform transition-transform hover:scale-105">
            <img class="w-full h-auto object-cover mb-2"
                src="https://cdn.discordapp.com/attachments/979722130071646259/1175144404055494806/CSS1.png?ex=656a2983&is=6557b483&hm=7e10e3ca4a6aaf7920acec00864bb4c04486d6c74059e8966d5a92e7240cfa14&"
                alt="Card 2 Image" />
        </div>

        <div class="bg-white p-4 rounded-lg shadow-md transform transition-transform hover:scale-105">
            <img class="w-full h-auto object-cover mb-2"
                src="https://cdn.discordapp.com/attachments/979722130071646259/1175144404416217099/HTML5.png?ex=656a2983&is=6557b483&hm=4bcce3f984d2a8e032cec78b33a1b4f711079bd9179c0251f9a1cdefea2ad876&"
                alt="Card 3 Image" />
        </div>

        <div class="bg-white p-4 rounded-lg shadow-md transform transition-transform hover:scale-105">
            <img class="w-full h-auto object-cover mb-2"
                src="https://cdn.discordapp.com/attachments/979722130071646259/1175144405171196014/javascript1.png?ex=656a2983&is=6557b483&hm=456f3125356ce5fdf66074ddb95bdaa7a1fdeb18e296a96b351b05caaea7e1f4&"
                alt="Card 4 Image" />
        </div>

        <div class="bg-white p-4 rounded-lg shadow-md transform transition-transform hover:scale-105">
            <img class="w-full h-auto object-cover mb-2"
                src="https://cdn.discordapp.com/attachments/979722130071646259/1175144404722389052/JAVA1.png?ex=656a2983&is=6557b483&hm=819ea26f27a035b19ca0308654c9e0e214d11fe7d02ad4d3b51723599347555c&"
                alt="Card 5 Image" />
        </div>

        <div class="bg-white p-4 rounded-lg shadow-md transform transition-transform hover:scale-105">
            <img class="w-full h-auto object-cover mb-2"
                src="https://cdn.discordapp.com/attachments/979722130071646259/1175147175068586085/React-icon.png?ex=656a2c17&is=6557b717&hm=85dcfdd69ce3b1adc32d205aa0a7a5c16323b4e0925d2f03597d491bd34f4ebe&"
                alt="Card 5 Image" />
        </div>
    </div>
</body>



    
//     {/* <div class="text-center mb-8">
//         <h2 class="tracking-tight font-extrabold text-transparent text-7xl bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500 md:py-2.5">Skills And Technologies!</h2>
//         <p class="text-3xl leading-relaxed dark:text-gray-300">
//             "Here Are Some Of The Languages And Platforms I am Currently Learning For My Career!"
//         </p>
//     </div> */}

//     <div class="text-center mb-8">
//         <h2 class="tracking-tight font-extrabold text-transparent text-7xl bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500 md:py-2.5 ">Skills And Technologies!</h2>
//         <p class="text-3xl leading-relaxed dark:text-gray-300">
//             "Here Are Some Of The Languages And Platforms I am Currently Learning For My Career!"
//         </p>
//     </div>
    // <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 md:px-32 w-8/12">

    //     <div class="bg-white p-4 rounded-lg shadow-md transform transition-transform hover:scale-105">
    //         <img class="w-full h-auto object-cover mb-2"
    //             src="https://cdn.discordapp.com/attachments/979722130071646259/1175144403749326878/PY1.png?ex=656a2982&is=6557b482&hm=1d463f1367a7d85670542e249ec4d4993ff589a44a26ca1cc4eda7174e3ea2d2&"
    //             alt="Card 1 Image" />
    //     </div>

    //     <div class="bg-white p-4 rounded-lg shadow-md transform transition-transform hover:scale-105">
    //         <img class="w-full h-auto object-cover mb-2"
    //             src="https://cdn.discordapp.com/attachments/979722130071646259/1175144404055494806/CSS1.png?ex=656a2983&is=6557b483&hm=7e10e3ca4a6aaf7920acec00864bb4c04486d6c74059e8966d5a92e7240cfa14&"
    //             alt="Card 2 Image" />
    //     </div>

    //     <div class="bg-white p-4 rounded-lg shadow-md transform transition-transform hover:scale-105">
    //         <img class="w-full h-auto object-cover mb-2"
    //             src="https://cdn.discordapp.com/attachments/979722130071646259/1175144404416217099/HTML5.png?ex=656a2983&is=6557b483&hm=4bcce3f984d2a8e032cec78b33a1b4f711079bd9179c0251f9a1cdefea2ad876&"
    //             alt="Card 3 Image" />
    //     </div>

    //     <div class="bg-white p-4 rounded-lg shadow-md transform transition-transform hover:scale-105">
    //         <img class="w-full h-auto object-cover mb-2"
    //             src="https://cdn.discordapp.com/attachments/979722130071646259/1175144405171196014/javascript1.png?ex=656a2983&is=6557b483&hm=456f3125356ce5fdf66074ddb95bdaa7a1fdeb18e296a96b351b05caaea7e1f4&"
    //             alt="Card 4 Image" />
    //     </div>

    //     <div class="bg-white p-4 rounded-lg shadow-md transform transition-transform hover:scale-105">
    //         <img class="w-full h-auto object-cover mb-2"
    //             src="https://cdn.discordapp.com/attachments/979722130071646259/1175144404722389052/JAVA1.png?ex=656a2983&is=6557b483&hm=819ea26f27a035b19ca0308654c9e0e214d11fe7d02ad4d3b51723599347555c&"
    //             alt="Card 5 Image" />
    //     </div>

    //     <div class="bg-white p-4 rounded-lg shadow-md transform transition-transform hover:scale-105">
    //         <img class="w-full h-auto object-cover mb-2"
    //             src="https://cdn.discordapp.com/attachments/979722130071646259/1175147175068586085/React-icon.png?ex=656a2c17&is=6557b717&hm=85dcfdd69ce3b1adc32d205aa0a7a5c16323b4e0925d2f03597d491bd34f4ebe&"
    //             alt="Card 5 Image" />
    //     </div>
    // </div>
// </body> 

//     <body class="bg-gradient-to-r from-rose-100 to-teal-100 min-h-screen flex flex-col items-center justify-center md:py-60">

//     <div class="text-center mb-8">
//         <h2 class="tracking-tight font-extrabold text-transparent text-7xl bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500 md:py-2.5 ">Skills N' Technologies</h2>
//         <p class="text-3xl leading-relaxed dark:text-gray-300">
//             "Here Are Some Of The Languages And Platforms I am Currently Learning For My Career!"
//         </p>
//     </div>

//     <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 md:px-32 w-1/2">
//         {/* <!-- Card 1 --> */}
//         <div class="bg-white p-4 rounded-lg shadow-md transform transition-transform hover:scale-105">
//             <img class="w-full h-auto object-cover mb-2"
//                 src="https://cdn.discordapp.com/attachments/979722130071646259/1175178714770854060/Browser_PH_2.png?ex=656a4977&is=6557d477&hm=3e5cd33cd603c17e7d6ecf963ae409957f10cf6f35d96cb8d86d6f25d2800df3&"
//                 alt="Card 1 Image" />
//         </div>

//         {/* <!-- Card 2 --> */}
//         <div class="bg-white p-4 rounded-lg shadow-md transform transition-transform hover:scale-105">
//             <img class="w-full h-auto object-cover mb-2"
//                 src="https://cdn.discordapp.com/attachments/979722130071646259/1175178714770854060/Browser_PH_2.png?ex=656a4977&is=6557d477&hm=3e5cd33cd603c17e7d6ecf963ae409957f10cf6f35d96cb8d86d6f25d2800df3&"
//                 alt="Card 2 Image" />
//         </div>

//         {/* <!-- Card 3 --> */}
//         <div class="bg-white p-4 rounded-lg shadow-md transform transition-transform hover:scale-105">
//             <img class="w-full h-auto object-cover mb-2"
//                 src="https://cdn.discordapp.com/attachments/979722130071646259/1175178714770854060/Browser_PH_2.png?ex=656a4977&is=6557d477&hm=3e5cd33cd603c17e7d6ecf963ae409957f10cf6f35d96cb8d86d6f25d2800df3&"
//                 alt="Card 3 Image" />
//         </div>

//         {/* <!-- Card 4 --> */}
//         <div class="bg-white p-4 rounded-lg shadow-md transform transition-transform hover:scale-105">
//             <img class="w-full h-auto object-cover mb-2"
//                 src="https://cdn.discordapp.com/attachments/979722130071646259/1175178714770854060/Browser_PH_2.png?ex=656a4977&is=6557d477&hm=3e5cd33cd603c17e7d6ecf963ae409957f10cf6f35d96cb8d86d6f25d2800df3&"
//                 alt="Card 4 Image" />
//         </div>
//     </div>

// </body>
  )
}
