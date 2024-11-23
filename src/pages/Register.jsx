import axios from 'axios'
import React, { useState } from 'react'
import { toast } from 'react-toastify'
const initialState = {
    identity: '',
    firstName: '',
    lastName: '',
    password: '',
    confirmPassword: ''
}

const Register = () => {
    const [input, setInput] = useState(initialState)

    const hdlOnChang = (e) => {
        setInput(prv => ({ ...prv, [e.target.name]: e.target.value }))
    }

    const hdlSubmit = async (e) => {
        e.preventDefault()
        try {
            if (!(input.identity.trim() && input.firstName.trim() && input.lastName.trim() && input.password.trim() && input.confirmPassword.trim())) {
                return alert('Please fill all input')
            }
            const result = await axios.post('http://localhost:8888/auth/register', input)
            console.log(result.data)
            setInput(initialState)
            toast.success('register successfully')
        } catch (err) {
            const errMsg = err.response?.data?.error || err.message
            console.log(errMsg)
        }
    }

    return (
        <form
            onSubmit={hdlSubmit}
            className='flex flex-col gap-3 p-4 pt-10'>
            <div className='flex gap-2'>
                <input
                    name='firstName'
                    value={input.firstName}
                    onChange={hdlOnChang}
                    type="text"
                    placeholder='first name'
                    className='input input-bordered w-full' />
                <input
                    name='lastName'
                    value={input.lastName}
                    onChange={hdlOnChang}
                    type="text"
                    placeholder='Surname'
                    className='input input-bordered w-full' />
            </div>
            <input
                name='identity'
                value={input.identity}
                onChange={hdlOnChang}
                type="text"
                placeholder='Email or phone number'
                className='input input-bordered w-full' />
            <input
                name='password'
                value={input.password}
                onChange={hdlOnChang}
                type="password"
                placeholder='New password'
                className='input input-bordered w-full' />
            <input
                name='confirmPassword'
                value={input.confirmPassword}
                onChange={hdlOnChang}
                type="password"
                placeholder='Confirm password'
                className='input input-bordered w-full' />
            <button className='btn btn-secondary text-xl text-white'>Sign up</button>
        </form>
    )
}

export default Register
