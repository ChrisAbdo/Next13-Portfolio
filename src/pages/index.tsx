'use client';

import * as React from 'react';
import Typewriter from 'typewriter-effect';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="hero lg:mt-64">
      <div className=" h-64 flex items-center justify-center px-16">
        <div className="relative w-60 max-w-lg z-40">
          <div className="absolute top-0  w-36 h-60 lg:w-96 lg:h-80 bg-[#845EC2] rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob"></div>
          <div className="absolute lg:left-48 top-20 w-36 h-52 lg:w-96 lg:h-80 bg-[#2C73D2] rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob animation-delay-2000"></div>
          <div className="absolute -left-48 -bottom-12 w-36 h-60 lg:w-96 lg:h-80 bg-[#D65DB1] rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob animation-delay-4000"></div>
        </div>
      </div>
      <div className="hero-content flex-col lg:flex-row-reverse bg-[#DADDE2] dark:bg-black z-40 rounded-md border border-black dark:border-[#303030]">
        <motion.img
          src="/chris-nobg.png"
          className="max-w-xs rounded-md shadow-2xl border border-[#DADDE2] dark:border-black bg-[#DADDE2] dark:bg-[#303030]"
          alt="test"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
        />
        <div>
          <h1 className="text-5xl font-bold">
            <Typewriter
              options={{
                strings: ['Hello World!', 'مرحبا بالعالم!', '¡Hola Mundo!'],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>

          <p className="text-2xl mt-4 max-w-lg">
            Welcome to my <span className="font-bold">project showcase!</span>
            <br />
            <br />
            I&apos;m <span className="font-bold">Christopher Abdo</span>,
            a&nbsp;
            <span className="font-bold">Software Engineer</span> based in
            Philadelphia. <br /> <br />
            This is a collection of projects I&apos;ve worked on, and some
            I&apos;m currently working on.
          </p>

          {/* <button className="btn btn-primary">Get Started</button> */}
        </div>
      </div>
    </div>
  );
}
