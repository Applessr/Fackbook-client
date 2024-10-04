import React from 'react'

const MenuItem = (props) => {
    const { icon: Icon, text, ...resProps } = props
    return (
        <button className="btn btn-ghost mt-3">
            <Icon {...resProps} />
            {text}
        </button>
    )
}

export default MenuItem


