import React, { useState } from 'react'
import Avatar from './Avatar'
import useUserStore from '../store/user-store'
import { AddPic, PhotoIcon } from '../icons'
import axios from 'axios'
import { toast } from 'react-toastify'
import usePostStore from '../store/post-store'
import AddPicture from './AddPicture'

const PostFormEdit = () => {
    const user = useUserStore((state) => state.user)
    const token = useUserStore((state) => state.token)
    const createPost = usePostStore((state) => state.createPost)
    const getAllPosts = usePostStore((state) => state.getAllPosts)
    const currentPost = usePostStore((state) => state.currentPost)
    const updatePost = usePostStore((state) => state.updatePost)
    const [message, setMessage] = useState(currentPost.message)
    const [addPic, setAddPic] = useState(false)
    const [file, setFile] = useState(null)
    const [loading, setLoading] = useState(false)

    const hdlChange = (e) => {
        setMessage(e.target.value)
    }

    const hdlEditPost = async (e) => {
        try {
            setLoading(true)
            const body = new FormData()
            body.append('message', message)
            if (file) {
                body.append('image', file)
            }
            await updatePost(token, body, currentPost.id)
            getAllPosts(token)
            document.getElementById('editForm-modal').close()
        } catch (err) {
            const errMsg = err.response?.data?.error || err.message
            toast(errMsg)
            console.log('error in hdlCreatePost', errMsg)
        } finally {
            setLoading(false)
        }
    }
    return (
        <div className="flex flex-col gap-2">
            {loading && <span className="loading loading-dots loading-xs"></span>}
            <h3 className="text-xl text-center">Edit post</h3>
            <div className='divider m-1 mb-0'></div>
            <div className="flex gap-2">
                <Avatar
                    className='w-11 h-11 rounded-full'
                    imgSrc={user.profileImage}
                />
                <div className="flex flex-col">
                    <div className="text-sm font-bold">{user.firstName + " " + user.lastName}</div>
                    <select
                        className='select select-xs w-28 bg-slate-200'
                        defaultValue={'who can see?'}
                    >
                        <option disabled value="who can see?">Who can see?</option>
                        <option value="Only me">Only me</option>
                        <option value="Public">Public</option>
                        <option value="Friends">Friends</option>
                    </select>
                </div>
            </div>
            <textarea
                value={message}
                onChange={hdlChange}
                className="textarea textarea-ghost"
                placeholder={`What on your mind? ${user.firstName}`}
                rows={message.split('\n').length} ></textarea>
            {currentPost.image && (
                <div className='border flex justify-evenly items-center'>
                    <img src={currentPost.image} className='h-[100px] object-contain' />
                    <button className='btn btn-sm'>Remove</button>
                </div>
            )}
            {addPic &&
                <AddPicture closeMe={() => setAddPic(false)} file={file} setFile={setFile} />}
            <div className="flex border rounded-lg p-2 justify-between items-center">
                <p>add with your post</p>
                <div className="flex gap-2">
                    <div
                        onClick={() => setAddPic(prv => !prv)}
                        className=' bg-slate-100 hover:bg-slate-200 justify-center items-center rounded-full active:scale-110'>
                        <PhotoIcon className=' w-7 h-7' />
                    </div>
                </div>
            </div>
            <button
                onClick={hdlEditPost}
                className={`btn btn-sm ${message.trim() ? 'btn-primary' : 'btn-disabled'}`}>Update Post</button>
        </div>
    )
}

export default PostFormEdit
