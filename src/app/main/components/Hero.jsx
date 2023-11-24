    'use client'
import React, { useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from 'next/image';

export default function Hero() {
  const [counter, setCounter] = useState(0);

  function decrementCounter() {
    setCounter((prev) => {
      return prev - 1;
    });
  }

  function incrementCounter() {
    setCounter((prev) => {
      return prev + 1;
    });
  }

  return (
    <div>
      <h1 className='p-6'>pizza</h1>
      <div className='grid grid-cols-3 gap-4'>
        <Card className="w-3/4 m-6 p-6 bg-[#FFD099]">
          <CardHeader>
            <CardDescription className="flex w-full justify-center">pizza image </CardDescription>
          </CardHeader>
          <CardContent className="flex w-full justify-center ">
            <p >pizza simple </p>
          </CardContent>
          <CardFooter className="flex justify-center gap-3 bg-[#FF6C22] p-5 rounded-md ">
            <div className='flex gap-1'>
            <Button variant="outline" className="bg-[#FFD099] rounded-md h-7 font-black"
            
            onClick={decrementCounter}>-</Button>
            <p>{counter}</p>
            <Button variant="outline" className="bg-[#FFD099] rounded-md h-7 font-black" 
            onClick={incrementCounter}>+</Button>
            </div>
            <Button variant="outline" className="bg-[#FFD099] rounded-md ">Add</Button>
          </CardFooter>
        </Card>




        <Card className="w-3/4 m-6 p-6 bg-[#FFD099]">
          <CardHeader>
            <CardDescription className="flex w-full justify-center">pizza image </CardDescription>
          </CardHeader>
          <CardContent className="flex w-full justify-center ">
            <p >pizza simple </p>
          </CardContent>
          <CardFooter className="flex justify-center gap-3 bg-[#FF6C22] p-5 rounded-md ">
            <div className='flex gap-1'>
            <Button variant="outline" className="bg-[#FFD099] rounded-md h-7 font-black"
            
            onClick={decrementCounter}>-</Button>
            <p>{counter}</p>
            <Button variant="outline" className="bg-[#FFD099] rounded-md h-7 font-black" 
            onClick={incrementCounter}>+</Button>
            </div>
            <Button variant="outline" className="bg-[#FFD099] rounded-md ">Add</Button>
          </CardFooter>
        </Card>


        <Card className="w-3/4 m-6 p-6 bg-[#FFD099]">
          <CardHeader>
            <CardDescription className="flex w-full justify-center">pizza image </CardDescription>
          </CardHeader>
          <CardContent className="flex w-full justify-center ">
            <p >pizza simple </p>
          </CardContent>
          <CardFooter className="flex justify-center gap-3 bg-[#FF6C22] p-5 rounded-md ">
            <div className='flex gap-1'>
            <Button variant="outline" className="bg-[#FFD099] rounded-md h-7 font-black"
            
            onClick={decrementCounter}>-</Button>
            <p>{counter}</p>
            <Button variant="outline" className="bg-[#FFD099] rounded-md h-7 font-black" 
            onClick={incrementCounter}>+</Button>
            </div>
            <Button variant="outline" className="bg-[#FFD099] rounded-md ">Add</Button>
          </CardFooter>
        </Card>






        <Card className="w-3/4 m-6 p-6 bg-[#FFD099]">
          <CardHeader>
            <CardDescription className="flex w-full justify-center">pizza image </CardDescription>
          </CardHeader>
          <CardContent className="flex w-full justify-center ">
            <p >pizza simple </p>
          </CardContent>
          <CardFooter className="flex justify-center gap-3 bg-[#FF6C22] p-5 rounded-md ">
            <div className='flex gap-1'>
            <Button variant="outline" className="bg-[#FFD099] rounded-md h-7 font-black"
            
            onClick={decrementCounter}>-</Button>
            <p>{counter}</p>
            <Button variant="outline" className="bg-[#FFD099] rounded-md h-7 font-black" 
            onClick={incrementCounter}>+</Button>
            </div>
            <Button variant="outline" className="bg-[#FFD099] rounded-md ">Add</Button>
          </CardFooter>
        </Card>




        <Card className="w-3/4 m-6 p-6 bg-[#FFD099]">
          <CardHeader>
            <CardDescription className="flex w-full justify-center">pizza image </CardDescription>
          </CardHeader>
          <CardContent className="flex w-full justify-center ">
            <p >pizza simple </p>
          </CardContent>
          <CardFooter className="flex justify-center gap-3 bg-[#FF6C22] p-5 rounded-md ">
            <div className='flex gap-1'>
            <Button variant="outline" className="bg-[#FFD099] rounded-md h-7 font-black"
            
            onClick={decrementCounter}>-</Button>
            <p>{counter}</p>
            <Button variant="outline" className="bg-[#FFD099] rounded-md h-7 font-black" 
            onClick={incrementCounter}>+</Button>
            </div>
            <Button variant="outline" className="bg-[#FFD099] rounded-md ">Add</Button>
          </CardFooter>
        </Card>




        <Card className="w-3/4 m-6 p-6 bg-[#FFD099]">
          <CardHeader>
            <CardDescription className="flex w-full justify-center">pizza image </CardDescription>
          </CardHeader>
          <CardContent className="flex w-full justify-center ">
            <p >pizza simple </p>
          </CardContent>
          <CardFooter className="flex justify-center gap-3 bg-[#FF6C22] p-5 rounded-md ">
            <div className='flex gap-1'>
            <Button variant="outline" className="bg-[#FFD099] rounded-md h-7 font-black"
            
            onClick={decrementCounter}>-</Button>
            <p>{counter}</p>
            <Button variant="outline" className="bg-[#FFD099] rounded-md h-7 font-black" 
            onClick={incrementCounter}>+</Button>
            </div>
            <Button variant="outline" className="bg-[#FFD099] rounded-md ">Add</Button>
          </CardFooter>
        </Card>



       


        
      </div>
    </div>
  );
}

