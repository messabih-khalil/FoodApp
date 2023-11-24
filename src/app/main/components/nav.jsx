import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
  import { Button } from "@/components/ui/button" 
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import { faPizzaSlice} from "@fortawesome/free-solid-svg-icons";
export default function nav() {
  return (
    <div  className='flex w-full gap-x-11 m-5'> 
     <div  className='w-4/5 flex gap-1'>
     <FontAwesomeIcon
        icon={faPizzaSlice}
      />
     <h1 className=' font-bold '> Pizza Swift </h1>
     
     </div>

      <Dialog className="w-1/6">
      <DialogTrigger className='bg-[#FFD099] rounded-md p-2 font-medium '>
     To Tables
      </DialogTrigger>
      <DialogContent>
     <DialogHeader>
      <DialogTitle className=" flex justify-center w-full m-3"> Available Tables</DialogTitle>
      <DialogDescription className="grid grid-cols-3 gap-2 ">
  <div className='bg-[#FF9209] w-20 h-11 '>
    <p className='font-bold flex justify-center w-full align-middle
     text-black '>Table 1 </p>
  </div>
  <div className='bg-[#FF9209] w-20 h-11 '>
    <p className='font-bold flex justify-center w-full align-middle
     text-black '>Table 2 </p>
  </div>

  <div className='bg-[#FF9209] w-20 h-11 '>
    <p className='font-bold flex justify-center w-full align-middle
     text-black '>Table 3 </p>
  </div>

  <div className='bg-[#FF9209] w-20 h-11 '>
    <p className='font-bold flex justify-center w-full align-middle
     text-black '>Table 4 </p>
  </div>

  <div className='bg-[#FF9209] w-20 h-11 '>
    <p className='font-bold flex justify-center w-full align-middle
     text-black rou'>Table 5 </p>
  </div>

  <div className='bg-[#FF9209] w-20 h-11 '>
    <p className='font-bold flex justify-center w-full align-middle
     text-black '>Table 6 </p>
  </div>



</DialogDescription>

     </DialogHeader>
    </DialogContent>
     </Dialog>
    </div>
  )
}



