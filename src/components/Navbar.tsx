import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
      <div className='flex items-center justify-between p-4'>
          {/* search bar */}
          <div className="hidden md:flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-300 px-2">
              <Image src="/search.png" alt='' width={14} height={14} />
              <input type='text' placeholder='search...' className='w-[200px] p-2 bg-transparent outline-none'/>
          </div>
          {/* icons and users */}
          <div className="flex items-center gap-6 justify-end w-full">
              <div className="bg-white rounded-full flex items-center justify-center cursor-pointer">
                  <Image src="/message.png" width={20} height={20} alt='' />
              </div>
              <div className="bg-white relative rounded-full flex items-center justify-center cursor-pointer">
                  <Image src="/announcement.png" width={20} height={20} alt='' />
                  <div className="absolute -top-3 -right-3 w-5 h-5 flex items-center text-xs justify-center rounded-full bg-purple-500 text-white">1</div>
              </div>
              <div className="flex flex-col">
                  <span className='text-sx leading-3 font-medium'>John Doe</span>
                  <span className='text-[10px] text-gray-500 text-right'>Admin</span>
              </div>
              <Image src="/avatar.png" alt='' width={36} height={36} className='rounded-full'/>
          </div>
    </div>
  )
}

export default Navbar
