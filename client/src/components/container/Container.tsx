import React from 'react'

const style = {
    alignItems: 'center',
    backgroundColor: '#eee',
    display: 'flex',
    height: 'calc(100vh - 20px)',
    padding: '10px 15px',
    justifyContent: 'center',
    width: 'calc(100vw - 30px)',
}

export const Container = ({children}:any) => {
    return (
        <div style={style}>
            {children}
        </div>
    )
}
