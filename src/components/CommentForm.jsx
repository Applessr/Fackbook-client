import React, { useState } from 'react'
import Avatar from './Avatar'
import { Send } from '../icons'
import { toast } from 'react-toastify'
import usePostStore from '../store/post-store'
import useUserStore from '../store/user-store'

const CommentForm = (props) => {
    const {postId} = props;

    const user = useUserStore((state) => state.user);
    const token = useUserStore((state) => state.token);
    const createComment = usePostStore((state) => state.createComment);
    const getAllPosts = usePostStore((state) => state.getAllPosts);

    const [message, setMessage] = useState('');

    const hdlSendComment = async(e) => {
       try {
        if(!message.trim()) {
            return toast.error('Input is empty')
        }
        const body = {
            message: message,
            postId: postId
        }
        await createComment(token,body)
        getAllPosts(token)
        setMessage('')
       } catch (err) {
        const errMsg = err.response?.data?.error|| err.message;
        toast.error(errMsg)
        console.log('error in dhlSendComment',errMsg)
       }
    }
  return (
    <div className='relative'>
        <div className="flex gap-3 items-start">
            <Avatar className='w-11 h-11 rounded-full'
            imgSrc={user.profileImage}/>
            <textarea 
            value={message}
            onChange={e=> setMessage(e.target.value)}
            className='textarea w-full p-1 leading-5'
            rows={message.split('\n').length}
            placeholder={`Comment as ${user.firstName} ${user.lastName}`}
            ></textarea>
        </div>
        <button 
        onClick={hdlSendComment}
        className='btn btn-circle btn-sm absolute bottom-1 right-2 '><Send className='ms-1 w-6 h-6'/></button>
    </div>
  )
}

export default CommentForm
