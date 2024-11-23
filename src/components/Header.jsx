import React from 'react'
import { Bell, FaceBookLogo, Group, HomeIcon, Menu, Message, OnlineDot, SearchIcon, Store, Video, } from '../icons'
import Avatar from './Avatar'
import { Link } from 'react-router-dom'
import useUserStore from '../store/user-store'

const Header = () => {
    const logout = useUserStore((state) => state.logout)
    const user = useUserStore((state) => state.user)
    console.log(user)


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
                <Link to='/' className="flex hover:border-b-2 hover:border-blue-500 ">
                    <HomeIcon className='w-7 text-slate-300' />
                </Link>
                <Link className="flex hover:border-b-2 hover:border-blue-500 ">
                    <Video className='w-8 text-slate-300' />
                </Link>
                <Link className="flex hover:border-b-2 hover:border-blue-500 ">
                    <Store className='w-10 text-slate-300' />
                </Link>
                <Link to='/friends' className="flex hover:border-b-2 hover:border-blue-500 ">
                    <Group className='w-7 text-slate-300' />
                </Link>
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
                            imgSrc={user.profileImage}
                        />
                           <OnlineDot className='absolute -right-4 w-14 top-3'/>
                    </div>
                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                        <li onClick={logout}><a>Logout</a></li>
                    </ul>
                </div>
            </div>
        </header>

    )
}

export default Header
