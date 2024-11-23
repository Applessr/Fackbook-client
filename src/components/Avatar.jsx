import React from 'react'
import defaultAvatar from '../assets/default-avatar.jpg'
import { OnlineDot } from '../icons'

const Avatar = (props) => {
    const { imgSrc, menu, ...restProps } = props
    return (
        <div className="avatar items-center cursor-pointer">
            <div {...restProps}>
               <img src={imgSrc ?? defaultAvatar}/>
            </div>
        </div>
    )
}

export default Avatar
