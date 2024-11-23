import React from 'react'
import CommentItem from './CommentItem'
import CommentForm from './CommentForm'

const CommentContainer = (props) => {
    const { postId, comments } = props
    return (
        <div className='flex flex-col gap-3 '>
            <div className="text-xs">see all comments</div>
            {comments.map(item => (<CommentItem key={item.id} comment={item} />))}
            <CommentForm  postId={postId} />
        </div>
    )
}

export default CommentContainer
