import React, { useState } from 'react'
import Avatar from './Avatar'
import { PhotoIcon, SmileIcon, VideoIcon } from '../icons'
import useUserStore from '../store/user-store'
import PostForm from './PostForm'


const CreatePost = () => {
  const user = useUserStore((state) => state.user)
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <div className="card bg-base-100 w-[80%] p-3 shadow-xl">
        <div className="card-body p-2">
          <div className='flex gap-2'>
            <Avatar imgSrc={user.profileImage} className='w-11 h-11 rounded-full' />
            <button 
             onClick={()=>{
              setIsOpen(true) 
              document.getElementById('postForm-modal').showModal()}}	
            className='btn flex-1 rounded-full justify-start'>
              What do you think?
            </button>
          </div>
          <div className='divider my-0'></div>
          <div className="flex gap-3 justify-between">
            <div className='flex gap-3 justify-center cursor-pointer hover:bg-gray-300 rounded-lg flex-1 py-2'>
              <VideoIcon className='h-5 w-5' />
              Live /Stream
            </div>
            <div className='flex gap-3 justify-center cursor-pointer hover:bg-gray-300 rounded-lg flex-1 py-2'>
              <PhotoIcon className='h-5 w-5' />
              Photo /Video
            </div>
            <div className='flex gap-3 justify-center cursor-pointer hover:bg-gray-300 rounded-lg flex-1 py-2'>
              <SmileIcon className='h-5 w-5' />
              Activity
            </div>
          </div>
        </div>
      </div>
      <dialog id="postForm-modal" className="modal" onClose={()=> setIsOpen(false) }>
        <div className="modal-box">
          <button
            type="button"
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            onClick={e => e.target.closest('dialog').close()}
          >✕</button>
          {isOpen && <PostForm/>}
        </div>
      </dialog>
    </>
  )
}

export default CreatePost
