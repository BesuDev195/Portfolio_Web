import React from 'react'
import "./About.css"
export default function About() {
  return (
    <>
<div className='fullNav flex min-md:space-x-130 max-sm:space-x-70 '> 

<h1 className='text-bold text-3xl text-shadow-fuchsia-800 md:ml-[200px] mt-6 max-sm: ml-3 font-light font-mono '>Besu</h1>
{/* nav bar links */}
 <div className='justify-end  '>
<ul className='md:flex min-md:space-x-4 p-5'>
  <li><a href='#' className='hover:text-[#3f3f46]'>About</a></li>
  <li><a href='#' className='hover:text-[#3f3f46]'>Education</a></li>
  <li><a href='#' className='hover:text-[#3f3f46]'>Project</a></li>
  <li><a href='#' className='hover:text-[#3f3f46]'>Contact</a></li> 
</ul>
 </div>
 </div>
 
{/* main content about me */}
<div>
<h1 className='text-bold text-5xl font-extrabold'>Besufekad Zenebe</h1> <span className=' rounded-md ml-3 mt-4 text-shadow-lg'>Frontend Dev</span> <br />
<div className='content ml-5 mt-4'>
  <p>I’m a passionate Front-End Developer with solid experience in React, Tailwind CSS, Bootstrap, and various modern UI libraries. I specialize in building responsive, fast, and user-friendly web applications with clean code and performance in mind. I enjoy turning design ideas into functional interfaces and continuously learning new tools and technologies to improve my development workflow.</p>

</div>
</div>




    </>
  )
}

