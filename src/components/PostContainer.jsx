import React from 'react'
import CreatePost from './CreatePost'
import PostItem from './PostItem'

const PostContainer = () => {
    return (
        <div className="w-[680px] items-center ml-[450px] min-h-screen my-3 flex flex-col gap-4 ">
            <CreatePost/>
            <PostItem/>
            <PostItem/>
            <PostItem/>
        </div>
    )
}

export default PostContainer
