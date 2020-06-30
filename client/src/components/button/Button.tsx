import React, {FC} from 'react'

const style = (block: boolean) =>({
    backgroundColor: '#00D1B2',
    border: '0px',
    borderRadius: '4px',
    color: '#fff',
    marginBottom: '10px',
    padding: '10px 15px',
    width: block ? '100%' : undefined,
})
interface IButton {
    block?: boolean
    onClick?: any
}

export const Button:FC<IButton> = (props:any) => {
    const { block = false } = props
    return (
        <button {...props} style={style(block)}/>
    )
}


