import React from 'react'

const style = {
    backgroundColor: '#00D1B2',
    border: '0px',
    borderRadius: '4px',
    padding: '10px 15px',
    color: '#fff',
}

export const Button = (props:any) => {
    return (
        <button {...props} style={style}/>
    )
}


