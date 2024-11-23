import React, { useState } from 'react'
import Avatar from './Avatar'
import useUserStore from '../store/user-store'
import { AddPic, PhotoIcon } from '../icons'
import axios from 'axios'
import { toast } from 'react-toastify'
import usePostStore from '../store/post-store'
import AddPicture from './AddPicture'

const PostForm = () => {
    const user = useUserStore((state) => state.user)
    const token = useUserStore((state) => state.token)
    const createPost = usePostStore((state) => state.createPost)
    const getAllPosts = usePostStore((state) => state.getAllPosts)
    const [message, setMessage] = useState('')
    const [addPic, setAddPic] = useState(false)
    const [file, setFile] = useState(null)
    const [loading, setLoading] = useState(false)

    const hdlChange = (e) => {
        setMessage(e.target.value)
    }

    const hdlCreatePost = async (e) => {
        try {
            setLoading(true)
            const body = new FormData()
            body.append('message', message)
            if (file) {
                body.append('image', file)
            }
            // for(let [key, value] of body.entries()) {
            //     console.log(key, value)
            // }
            const result = await createPost(token, body, user)
            document.getElementById('postForm-modal').close()
            getAllPosts(token)
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
            <h3 className="text-xl text-center">Create post</h3>
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
                onClick={hdlCreatePost}
                className={`btn btn-sm ${message.trim() ? 'btn-primary' : 'btn-disabled'}`}>Create Post</button>
        </div>
    )
}

export default PostForm
