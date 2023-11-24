
"use client"

import React from 'react'
import Nav from './components/nav'
import Hero from './components/Hero'
import Side  from './components/Side'
const page = () => {
  return (
<div className='flex justify-center w-full gap-3'>

  <div className=" w-3/4 m-5">
    <Nav />
    <Hero/>
  </div>
  <div className="w-1/4  border-l-2 border-orange-950 border-solid m-3 ">
    <Side />
  </div>
</div>




  )
}

export default page