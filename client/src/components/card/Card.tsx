import React from 'react'

const style = {
    backgroundColor: '#fff',
    border: '1px solid #ddd',
    padding: '10px 15px',
}

export const Card = ({children}:any) => {
    return (
        <div style={style}>
            {children}
        </div>
    )
}


