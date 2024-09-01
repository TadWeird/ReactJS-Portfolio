import React from 'react'
import 'flowbite';
import { Link, animateScroll as scroll } from 'react-scroll';

export default function MeBout() {
  return (
    <section id="me" class="bg-white dark:bg-gray-900 md:py-20">
  <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-9 lg:px-6">
      <h2 class="mb-8 tracking-tight font-extrabold text-transparent text-7xl bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">About Me!</h2>
      <div class="grid pt-8 text-left border-t border-gray-200 md:gap-16 dark:border-gray-700 md:grid-cols-2">
          <div>
              <div class="mb-10">
                  <h3 class="flex items-center mb-4 text-lg font-medium text-plopnpurple-200 dark:text-white">
                      <svg class="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                      Who am I?
                  </h3>
                  <p class="text-gray-500 dark:text-gray-400">I'm an Aspiring Web Developer and Data Analyst. Explore my portfolio through its design and web solution integration using UI/UX! Also! I'm Jaime (Also Known As PlopN) A recent graduate for Bachelors in Computer Engineering! Basically just a human person trying to see the wonders of technology and what goes underneath the Interfaces!
                </p>
              </div>
              <div class="mb-10">                        
                  <h3 class="flex items-center mb-4 text-lg font-medium text-plopnpurple-200 dark:text-white">
                      <svg class="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                      Why Do I Do This?
                  </h3>
                  <p class="text-gray-500 dark:text-gray-400">It's because I am intrigued and interested with the inner workings and function of both software and hardware related things that revolves around technology.</p>
              </div>
              <div class="mb-10">
                  <h3 class="flex items-center mb-4 text-lg font-medium text-plopnpurple-200 dark:text-white">
                      <svg class="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                     Will You Contribute To Other Works Similar To What You Do?
                  </h3>
                  <p class="text-gray-500 dark:text-gray-400">Well, if I have enough practice, application, trail and testing into making myself part of the community. Then Yes I will contribute to Open Source Projects and possible More!</p>
              </div>
              <div class="mb-10">
                  <h3 class="flex items-center mb-4 text-lg font-medium text-plopnpurple-200 dark:text-white">
                      <svg class="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                      Will You Continue To Pursue This Course In Your Life?
                  </h3>
                  <p class="text-gray-500 dark:text-gray-400">Yes I will keep pursuing to make the most out of this journey of mine. Regardless if there are bad and good days ahead of us. That's Just Life.</p>
    
              </div>
          </div>
          <div>
              <div class="mb-10">
                  <h3 class="flex items-center mb-4 text-lg font-medium text-plopnpurple-200 dark:text-white">
                      <svg class="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                      My Perspective In Life?
                  </h3>
                  <p class="text-gray-500 dark:text-gray-400">One of the perspectives I try to integrate into my life is somethings there will be ups and Downs. We just have to keep moving forward. Regardless of the outcome. Life doesn't wait for no-one and action is a must in most life-cases.</p>
              </div>
              <div class="mb-10">
                  <h3 class="flex items-center mb-4 text-lg font-medium text-plopnpurple-200 dark:text-white">
                      <svg class="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                     What Else Will You Be Doing In The Future?
                  </h3>
                  <p class="text-gray-500 dark:text-gray-400">Make A Better Version Of Myself. Preferably doing more than just Programming. Exploring what else I can achieve and accomplish.</p>
              </div>
          </div>
      </div>
  </div>
</section>
  )
}
