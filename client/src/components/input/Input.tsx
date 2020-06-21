import React, {FC} from 'react'

const style = {
    backgroundColor: '#fff',
    border: '1px solid #ddd',
    borderRadius: '4px',
    marginBottom: '10px',
    padding: '10px 15px',
    width: 'calc(100% - 30px)',
}
const  spanStyle = {
    color: '#777',
    fontSize: '10px',
    fontWeight: 900,
    textTransform: 'uppercase'
} as React.CSSProperties //transforma el objeto a Propiedad
interface IInputProps {
    placeholder?: string
    label: string
}
const Input:FC<IInputProps> = (props:any) => {
    const {label} = props
    return (
        <div>
            <span style={spanStyle}>{label}</span>
            <input {...props} style={style}/>
        </div>
    )
}

export default Input
