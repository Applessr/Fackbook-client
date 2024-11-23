import Avatar from './Avatar'
import { CommentIcon, Cross, Dot, Like, LikePost, Menu, PhotoIcon, Share, SmileIcon, VideoIcon } from '../icons'
import useUserStore from '../store/user-store'
import { toast } from 'react-toastify';
import usePostStore from '../store/post-store';
import TimeAgo from 'react-timeago';
import CommentContainer from './CommentContainer';

const PostItem = (props) => {
    const { post } = props;
    const user = useUserStore(state => state.user)
    const token = useUserStore(state => state.token)
    const deletePose = usePostStore(state => state.deletePose)
    const getAllPosts = usePostStore(state => state.getAllPosts)
    const createLike = usePostStore(state => state.createLike)
    const unLike = usePostStore(state => state.unLike)


    const haveLike = () => post.likes.findIndex(el => el.userId === user.id) !== -1
    const hdlLikeClick = async(e) => {
        if(haveLike()) {
            await unLike(token, post.id)
        } else {
            await createLike(token, {postId: post.id})
        }
        getAllPosts(token)
    }

    // Function to extract YouTube ID from URL
    const extractYouTubeId = (url) => {
        const regex = /(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
        const match = url.match(regex);
        return match ? match[1] : null;
    };

    const youtubeId = extractYouTubeId(post.message);

    const hdlDelete = async (e) => {
        try {
            if (!confirm('Dele this post')) {
                return console.log('Cancel delete')
            }
            await deletePose(token, post.id)
        } catch (err) {
            const errMsg = err.response.data.error || err.message
            toast(errMsg)
            console.log('error in hdlDelete', err)
        }
    }

    const hdlShowEditModal = (e) => {
        setCurrentPost(post)
        document.getElementById('editForm-modal').showModal()
    }

    return (
        <div className="card bg-base-100 w-[80%] p-3 shadow-xl">
            <div className="card-body p-3">
                <div className="flex justify-between">
                    <div className='flex gap-3'>
                        <Avatar imgSrc={post.user.profileImage} className='w-11 h-11 rounded-full' />
                        <div className="flex flex-col font-bold">
                            <span className=''>{post.user.firstName} {post.user.lastName}</span>
                            <span className='text-xs text-slate-400'><TimeAgo date={post.createdAt} /></span>
                        </div>
                    </div>
                    <div className="flex gap-2">
                        {user.id === post.userId && (
                            <div className="dropdown">
                                <div tabIndex={0} role="button" className="">
                                    <div className="avatar items-center cursor-pointer ">
                                        <div className="w-10 h-10 rounded-full !flex justify-center items-center  hover:bg-gray-200">
                                            <Dot className="w-6" />
                                        </div>
                                    </div>
                                </div>
                                <ul
                                    tabIndex={0}
                                    className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
                                >
                                    <li onClick={hdlShowEditModal}>
                                        <a>Edit</a>
                                    </li>
                                    <li onClick={hdlDelete}>
                                        <a>Delete</a>
                                    </li>
                                </ul>
                            </div>)}

                        <div className="avatar items-center cursor-pointer dropdown">
                            <div className="w-10 h-10 rounded-full !flex justify-center items-center hover:bg-gray-200">
                                <Cross className="w-9" />
                            </div>
                        </div>
                    </div>
                </div>
                <span className=''>{post.message}</span>

                {/* Check if YouTube video exists and embed it */}
                {youtubeId && (
                    <div className="p-2 flex justify-center">
                        <iframe
                            width="480"
                            height="315"
                            src={`https://www.youtube.com/embed/${youtubeId}`}
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                )}

                {post.image && (
                    <img src={post.image} alt='post-pic' className='p-4 max-h-[500px] object-contain' />
                )}
                <div className='flex justify-between items-center pe-4'>
                    <div className='avatar items-end cursor-pointer gap-1 '>
                        <div className='w-7 h-7 rounded-full !flex justify-center items-center'>
                            <LikePost className='text-white w-5 ' />
                        </div>
                        <p>{post.likes.length}</p>
                    </div>
                    <div className='flex gap-2'>
                        <p className='opacity-70'>{post.comments.length} comments</p>
                    </div>
                </div>

                <div className='divider h-0 m-0'></div>
                <div className="flex gap-3 justify-between">
                    <div className={`flex gap-3 justify-center cursor-pointer hover:bg-gray-300 rounded-lg flex-1 py-2 
                        ${haveLike() ? 'bg-blue-500' : ''}`}
                        onClick={hdlLikeClick}>
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
                <CommentContainer postId={post.id} comments={post.comments}/>
            </div>
        </div>
    );
}

export default PostItem;