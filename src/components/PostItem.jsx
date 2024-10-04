import Avatar from './Avatar'
import { CommentIcon, Cross, Dot, Like, Menu, PhotoIcon, Share, SmileIcon, VideoIcon } from '../icons'

const PostItem = () => {
    return (
        <div className="card bg-base-100 w-[80%] p-3 shadow-xl">
            <div className="card-body p-3">
                <div className="flex justify-between">
                    <div className='flex gap-3'>
                        <Avatar className='w-11 h-11 rounded-full' />
                        <div className="flex flex-col font-bold">
                            <span className=''>Mojo Jojo</span>
                            <span className='text-xs text-slate-400'>59 min.</span>
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <div className="avatar items-center cursor-pointer dropdown">
                            <div className="w-10 h-10 rounded-full !flex justify-center items-center  hover:bg-gray-200">
                                <Dot className="w-6" />
                            </div>
                        </div>
                        <div className="avatar items-center cursor-pointer dropdown">
                            <div className="w-10 h-10 rounded-full !flex justify-center items-center  hover:bg-gray-200">
                                <Cross className="w-9" />
                            </div>
                        </div>
                    </div>
                </div>
                <span className=''>This is my first post</span>
                <div className='divider h-0 m-0'></div>
                <div className="flex gap-3 justify-between">
                    <div className='flex gap-3 justify-center cursor-pointer hover:bg-gray-300 rounded-lg flex-1 py-2'>
                        <Like className='h-6 w-6' />
                        Like
                    </div>
                    <div className='flex items-center gap-3 justify-center cursor-pointer hover:bg-gray-300 rounded-lg flex-1 py-2'>
                        <CommentIcon className='h-5 w-5' />
                        Comment
                    </div>
                    <div className='flex gap-3 justify-center cursor-pointer hover:bg-gray-300 rounded-lg flex-1 py-2'>
                        <Share className='h-6 w-6' />
                        Share
                    </div>
                </div>
                <div className='divider h-0 m-0'></div>
            </div>
        </div>
    )
}

export default PostItem
