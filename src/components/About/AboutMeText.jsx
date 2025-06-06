import React from 'react'

function AboutMeText() {
  return (
    <div className='flex flex-col md:items-start sm:items-center md:text-left sm:text-center'>
      <h2 className='text-6xl text-cyan mb-10'>About Me</h2>
      <p className='text-white'>
        As a passionate Front-End Developer, I specialize in creating responsive, user-friendly websites and applications. With expertise in HTML, CSS, JavaScript, React, and Java, I bring a strong understanding of front-end technologies and design principles to every project. I’m committed to writing clean, efficient code and building seamless user experiences. Whether working independently or as part of a team, I thrive in dynamic environments where innovation and collaboration are key. Looking to connect with like-minded professionals and explore new opportunities to continue growing and making a positive impact in the tech industry.
      </p>

      {/* BUTTON ROW */}
      <div className="flex mt-10 space-x-4 justify-center md:justify-start">
        <a
          href="https://github.com/navnitsingh0110"
          target="_blank"
          rel="noopener noreferrer"
          className='border border-orange rounded-full py-2 px-4 text-lg hover:bg-black transition-all duration-500 cursor-pointer text-white hover:text-cyan'
        >
          My Projects
        </a>
        <a
          href="/Navnit_Singh_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className='border border-orange rounded-full py-2 px-4 text-lg hover:bg-black transition-all duration-500 cursor-pointer text-white hover:text-cyan'
        >
          My Resume
        </a>
      </div>

    </div>
  )
}

export default AboutMeText
