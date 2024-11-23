import React from 'react'
import { AddPic } from '../icons'

const AddPicture = (props) => {
    const { closeMe, file, setFile } = props

    const hdlClose = (e) => {
        e.stopPropagation()
        setFile(null)
        closeMe()
    }

    const hdlFileChange = (e) => {
        setFile(e.target.files[0])
    }
    return (
        <div className='flex flex-col p-2 border rounded-lg'>
            <div
                onClick={() => document.getElementById('input-file').click()}
                className="bg-slate-100 hover:bg-slate-200 min-h-40 rounded-lg relative cursor-pointer">
                <input
                    onChange={hdlFileChange}
                    type='file'
                    className='opacity-0'
                    id='input-file' />
                {file && <img src={URL.createObjectURL(file)} className='h-100 block mx-auto' />}
                <button
                    onClick={hdlClose}
                    className='btn btn-sm btn-circle btn-outline border-gray-300 absolute top-1 right-1 opacity-50'>X</button>
                {!file && <p className='absolute top-1/2 left-1/2 -translate-x-1/2'><AddPic className='w-10 opacity-70' /></p>}
            </div>
        </div>
    )
}

export default AddPicture
