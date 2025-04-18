'use client'

import { ADDRESS_PHONE, APP_NAME, APP_COPYRIGHT } from '@/lib/constants'
import { ChevronUp } from 'lucide-react'
import Link from 'next/link'
import { Button } from '../ui/button'


export default function Footer() {
  const formattedCopyright = APP_COPYRIGHT.replace('{APP_NAME}', APP_NAME)
  
  return (
    // <footer className='bg-black  text-white underline-link'>
    <footer className='bg-gradient-to-r from-gray-900 via-black to-gray-900  text-white underline-link'>
      <div className='w-full'>
        <Button
          variant='ghost'
          // className='bg-gray-800 w-full  rounded-none '
          className='bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 w-full  rounded-none '
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <ChevronUp className='mr-2 h-4 w-4' />
          Back to top
        </Button>
      </div>
      <div className='p-4'>
        <div className='flex justify-center  gap-3 text-sm'>
          <Link href='/page/conditions-of-use'>Conditions of Use</Link>
          <Link href='/page/privacy-policy'> Privacy Notice</Link>
          <Link href='/page/help'>Help</Link>
        </div>
        <div className='flex justify-center text-sm'>
          <p>{formattedCopyright}</p>
        </div>
        <div className='mt-8 flex justify-center text-sm text-gray-400 whitespace-nowrap'>
          {ADDRESS_PHONE}
        </div>
      </div>
    </footer>
  )
}