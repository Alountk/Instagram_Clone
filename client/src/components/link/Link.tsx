import React from 'react'
// import {Link} from 'react-router-dom'

const style = {
    color: 'blue',
    fontSize: '14px',
    padding: '15px',
}


export const Link = (props:any) => {
    return (
        <a {...props} style={style} />
    )
}
