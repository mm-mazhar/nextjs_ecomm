import { getAllCategories } from '@/lib/actions/product.actions'
import { APP_NAME } from '@/lib/constants'
import data from '@/lib/data'
import Image from 'next/image'
import Link from 'next/link'
import Menu from './menu'
import Search from './search'
import Sidebar from './sidebar'

export default async function Header() {
  const categories = await getAllCategories()
  return (
    // <header className='bg-black  text-white'>
    < header className='bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white'>
      <div className='px-2'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center'>
            <Link
              href='/'
              // className='flex items-center header-button font-extrabold text-2xl m-1 '
              className='flex items-center font-extrabold text-2xl ml-[-6.5rem] py-1 px-1'
            >
              <Image
                // src='/icons/logo.svg'
                src='/icons/logo-no-background.svg'
                width={400}
                height={450}  
                alt={`${APP_NAME} logo`}
              />
              {/* {APP_NAME} */}
            </Link>
          </div>
          <div className='hidden md:block flex-1 max-w-xl'>
            <Search />
          </div>
          <Menu />
        </div>
        <div className='md:hidden block py-2'>
          <Search />
        </div>
      </div>
      {/* <div className='flex items-center px-3 mb-[1px]  bg-gray-800'> */}
      <div className='flex items-center px-3 mb-[1px] bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800'>
      {/* <div className='flex items-center px-3 mb-[1px] bg-gradient-to-r from-gray-900 via-black to-gray-900'> */}
      {/* <div className='flex items-center px-3 mb-[1px]  bg-black'> */}
        {/* <Button
          variant='ghost'
          className='light header-button flex items-center gap-1 text-base [&_svg]:size-6'
        >
          <MenuIcon />
          All
        </Button> */}
        <Sidebar categories={categories} />
        <div className='flex items-center flex-wrap gap-3 overflow-hidden max-h-[42px]'>
          {data.headerMenus.map((menu) => (
            <Link
              href={menu.href}
              key={menu.href}
              className='header-button !p-2'
            >
              {menu.name}
            </Link>
          ))}
        </div>
      </div>
    </header>
  )
}