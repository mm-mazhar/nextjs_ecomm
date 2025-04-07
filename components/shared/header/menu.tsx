// import Link from 'next/link'
import CartButton from './cart-button'
// import { User } from 'lucide-react'
import UserButton from './user-button'

export default function Menu() {
  return (
    <div className='flex justify-end'>
      <nav className='flex gap-3 w-full'>
        <UserButton />

        <CartButton />
      </nav>
    </div>
  )
}