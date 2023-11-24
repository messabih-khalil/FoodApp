import React from 'react'

export default function Side() {
  return (
    <div className="p-10 w-full flex  flex-col justify-center align-middle h-full ">
    <h1 className='font-medium flex w-1/2 justify-center'>Tables orders </h1>
     <div className='grid grid-cols-2 justify-center w-full gap-4 h-full m-5'>

     <p className='bg-[#FFD099] rounded-md w-2/4 h-12 font-bold p-7'>1</p>
     <p className='bg-[#FFD099] rounded-md w-2/4 h-12 font-bold p-7'> 2</p>
     <p className='bg-[#FFD099] rounded-md w-2/4 h-12 font-bold p-7' > 3</p>
     <p className='bg-[#FFD099] rounded-md w-2/4 h-12 font-bold p-7'> 4</p>
     </div>
    
    </div>
  )
}
