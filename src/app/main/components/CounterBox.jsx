
 "use client"

import React,{ useState} from 'react'
import { Button } from '@/components/ui/button';

export default function CounterBox() {
    const [counter, setCounter] = useState(0);


    const incrementCounter = () => {
      setCounter(counter + 1);
    };
  
  
    const decrementCounter = () => {
      setCounter(counter - 1);
    };       
 
     
 
    return (
    <div className='flex justify-center w-full'>

                            <div className='flex justify-between w-full items-center'>
                                <Button
                                    className='rounded-md font-black bg-transparent hover:bg-transparent text-black text-lg'
                                    onClick={decrementCounter}
                                >
                                    -
                                </Button>
                                <p className='rounded-md font-black bg-transparent hover:bg-transparent text-black'>
                                    {counter}
                                </p>
                                <Button
                                    className='rounded-md font-black bg-transparent hover:bg-transparent text-black text-lg'
                                    onClick={incrementCounter}
                                >
                                    +
                                </Button>
                            </div>
                            <Button className='rounded-md '>Add</Button>

    </div>
  )
}
