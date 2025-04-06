import Link from 'next/link'
import CartButton from './cart-button'

export default function Menu() {
  return (
    <div className='flex justify-end'>
      <nav className='flex gap-3 w-full'>
        {/* <Link href='/login' className='flex items-center header-button'> */}
        <Link href='/login' className='flex items-center header-button sm:ml-0 -ml-1 whitespace-nowrap'>
          Log In
        </Link>

        <CartButton />
      </nav>
    </div>
  )
}