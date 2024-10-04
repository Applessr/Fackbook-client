import React from 'react'
import { Bell, FaceBookLogo, Group, HomeIcon, Menu, Message, SearchIcon, Store, Video, } from '../icons'
import Avatar from './Avatar'

const Header = () => {
    return (
        <header className='shadow-lg bg-white h-14 w-full fixed top-0 z-10 flex justify-between px-3'>
            {/* logo + input*/}
            <div className='flex p-1 gap-2 items-center flex-1'>
                <FaceBookLogo className='w-12 ' />
                <label className="input input-bordered flex items-center w-64 h-10 rounded-full gap-2">
                    <input type="text" className="grow" placeholder="Search on FakeBook" />
                    <SearchIcon />
                </label>
            </div>
            {/* center icons*/}
            <div className="flex gap-16 flex-1 justify-center ">
                <div className="flex hover:border-b-2 hover:border-blue-500 ">
                    <HomeIcon className='w-7 text-slate-300' />
                </div>
                <div className="flex hover:border-b-2 hover:border-blue-500 ">
                    <Video className='w-8 text-slate-300' />
                </div>
                <div className="flex hover:border-b-2 hover:border-blue-500 ">
                    <Store className='w-10 text-slate-300' />
                </div>
                <div className="flex hover:border-b-2 hover:border-blue-500 ">
                    <Group className='w-7 text-slate-300' />
                </div>
            </div>
            {/* right icons*/}
            <div className='flex items-center justify-end pr-4 flex-1  gap-3'>
                <div className='w-10 h-10 rounded-full bg-slate-300 hover:bg-slate-100 flex justify-center items-center'>
                    <Menu className='w-5 text-slate-300' />
                </div>
                <div className='w-10 h-10 rounded-full bg-slate-300 hover:bg-slate-100 flex justify-center items-center'>
                    <Message className='w-5 text-slate-300' />
                </div>
                <div className='w-10 h-10 rounded-full bg-slate-300 hover:bg-slate-100 flex justify-center items-center'>
                    <Bell className='w-5 text-slate-300' />
                </div>
                <div className="dropdown avatar dropdown-end">
                    <div tabIndex={0} role="button" className=" m-1 w-10 rounded-full">
                    <Avatar 
                    className='w-10 h-10 rounded-full' 
                    // imgSrc='https://www.dictionary.com/e/wp-content/uploads/2018/04/Mojo-Jojo-300x300.jpg'
                    />
                    </div>
                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                        <li><a>Logout</a></li>
                    </ul>
                </div>
            </div>
        </header>

    )
}

export default Header
