import axios from 'axios'
import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

const useUserStore = create(persist((set, get) => ({
    user: null,
    token: '',
    login: async (input) => {
        const result = await axios.post('http://localhost:8888/auth/login', input)
        set({ token: result.data.token, user: result.data.user })
        return result.data
    },
    logout: () => {
        set({ token: '', user: null })
    }
}), {
    name: 'user-store',
    storage: createJSONStorage(() => localStorage)
}));

export default useUserStore