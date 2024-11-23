import React, { useEffect, useState } from 'react'
import CreatePost from './CreatePost'
import PostItem from './PostItem'
import usePostStore from '../store/post-store'
import useUserStore from '../store/user-store'
import PostFormEdit from './PostFormEdit'

const PostContainer = () => {
    const posts = usePostStore(state => state.posts)
    const getAllPosts = usePostStore(state => state.getAllPosts)
    const currentPost = usePostStore(state => state.currentPost)
    const setCurrentPost = usePostStore(state => state.setCurrentPost)
    const token = useUserStore(state => state.token)
    const [isOpen, setIsOpen] = useState(true)

    
    useEffect(() => {
        getAllPosts(token).th
    }, [])

    
    return (
        <>
            <div className="w-[680px] items-center ml-[450px] min-h-screen my-3 flex flex-col gap-4 ">
                <CreatePost />
                {posts.map(item => (
                    <PostItem key={item.id} post={item} />
                ))}
            </div>
            <dialog id="editForm-modal" className="modal" onClose={() => setCurrentPost(null)}>
                <div className="modal-box">
                    <button
                        type="button"
                        className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                        onClick={e => e.target.closest('dialog').close()}
                    >✕</button>
                  { currentPost && <PostFormEdit />}
                </div>
            </dialog>
        </>
    )
}

export default PostContainer
