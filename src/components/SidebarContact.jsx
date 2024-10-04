import React from 'react'
import Avatar from './Avatar'
import MenuItem from './MenuItem'

const SidebarContact = () => {
  return (
    <div className="fixed right-0  top-14 h-full flex flex-col w-[250px] items-start overflow-auto gap-2 pt-2 max-xl:hidden">
          <h1 className='text-xl font-bold mt-6'>Friends</h1>
          <MenuItem icon={()=>(<Avatar className='w-10 h-10 rounded-full' />)} text='Mojo Jojo'/>
          <MenuItem icon={()=>(<Avatar className='w-10 h-10 rounded-full' />)} text='Mojo Jojo'/>
          <MenuItem icon={()=>(<Avatar className='w-10 h-10 rounded-full' />)} text='Mojo Jojo'/>
        </div>
  )
}

export default SidebarContact
