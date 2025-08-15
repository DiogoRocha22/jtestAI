import React from 'react'
import Button from '../ui/Button'
import { FaPaperPlane } from 'react-icons/fa'
import Image from 'next/image'

export default function MessageBox() {
  return (
    <div className='flex flex-col gap-2 bg-transparent border border-gray-700 p-4 rounded-lg w-full md:max-w-2xl'>
      <input type="text" placeholder='Digite sua mensagem...' className='w-full max-w-md p-2 rounded-md border-none outline-none' />
      
      <div className='flex justify-between gap-2'>
        <div className='flex items-center gap-2'>
           <Image className='rounded-full' src="/meta-ai.png" alt="logo" width={30} height={30} />
           Llama AI
        </div>

        <Button variant="gradient" className="mt-4 text-xl text-black rounded-full font-bold py-3 px-3 hover:scale-105 transition-all duration-300"><FaPaperPlane size={16} /></Button>
      </div>
    </div>
  )
} 