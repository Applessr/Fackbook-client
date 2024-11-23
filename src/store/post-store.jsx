import axios from "axios";
import { create } from "zustand";


const usePostStore = create((set, get) => ({
    posts: [],
    currentPost: null,
    loading: false,
    createPost: async (token, body, user) => {
        const result = await axios.post('http://localhost:8888/post', body, {
            headers: { Authorization: `Bearer ${token}` }
        })
        set(state => ({
            posts: [...state.posts, { ...result.data, user }],
        }))
    },
    getAllPosts: async (token) => {
        set({ loading: true })
        const result = await axios.get('http://localhost:8888/post', {
            headers: { Authorization: `Bearer ${token}` }
        })
        set({ posts: result.data.posts, loading: false })
    },
    deletePose: async (token, id) => {
        const result = await axios.delete(`http://localhost:8888/post/${id}`, {
            headers: { Authorization: `Bearer ${token}` }
        })
        set(state => ({
            posts: state.posts.filter(el => el.id !== id)
        }))
    }, setCurrentPost: (post) => {
        set({ currentPost: post })
    }, updatePost: async (token, body, id) => {
        const result = await axios.put(`http://localhost:8888/post/${id}`, body, {
            headers: { Authorization: `Bearer ${token}` }
        })
    },
    createComment: async (token, body) => {
        const result = await axios.post('http://localhost:8888/comment', body, {
            headers: { Authorization: `Bearer ${token}` }
        })
    },
    createLike: async (token, body) => {
        const result = await axios.post('http://localhost:8888/like', body, {
            headers: { Authorization: `Bearer ${token}` }
        })
    },
    unLike: async (token, id) => {
        const result = await axios.delete(`http://localhost:8888/like/${id}`, {
            headers: { Authorization: `Bearer ${token}` }
        });
        return result.data;
    },
}));

export default usePostStore;