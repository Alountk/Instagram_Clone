import React from 'react'

const style = {
    textAlign: 'center',
    width: '100%'
} as React.CSSProperties


export const Center = (props:any) => {
    return (
        <div {...props} style={style} />
    )
}
