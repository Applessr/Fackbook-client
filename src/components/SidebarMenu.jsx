import React from 'react'
import { Feed, Friends, Groups, Messenger, Memory, Messager, Saved, Stores, VideoCom, Games } from '../icons'
import MenuItem from './MenuItem'
import Avatar from './Avatar'
import useUserStore from '../store/user-store'

const SidebarMenu = () => {
  const user = useUserStore((state) => state.user)
  return (
    <div className="fixed top-14 h-full flex flex-col items-start gap-2 w-[350px] overflow-auto min-w-[220px] max-xl:w-[220px]">
    <MenuItem icon={()=>(<Avatar className='w-10 h-10 rounded-full' imgSrc={user.profileImage}  />)} text={(`${user.firstName} ${user.lastName}`)}/>
    <MenuItem icon={Friends} text='Friends' className='w-11 text-slate-300'/>
    <MenuItem icon={Memory} text='Memories' className='w-10 text-slate-300'/>
    <MenuItem icon={Saved} text='Saved' className='w-9 text-slate-300'/>
    <MenuItem icon={Groups} text='Groups' className='w-8 text-slate-300'/>
    <MenuItem icon={VideoCom} text='Video' className='w-8 text-slate-300'/>
    <MenuItem icon={Stores} text='Marketplace' className='w-8 text-slate-300'/>
    <MenuItem icon={Feed} text='Feeds' className='w-8 text-slate-300'/>
    <MenuItem icon={Messager} text='Messenger' className='w-7 text-slate-300'/>
    <MenuItem icon={Messenger} text='Messenger Kids' className='w-7 text-slate-300'/>
    <MenuItem icon={Games} text='Gaming' className='w-8 text-slate-300'/>
    <MenuItem icon={Games} text='Gaming' className='w-8 text-slate-300'/>
  </div>
  )
}

export default SidebarMenu
