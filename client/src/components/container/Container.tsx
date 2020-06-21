import React, {FC} from 'react'

const style = (center: boolean) => ({
    alignItems: center ? 'center': undefined,
    backgroundColor: '#eee',
    display: 'flex',
    flexDirection: 'column',
    height: 'calc(100vh - 20px)',
    justifyContent: center ? 'center' : undefined,
    padding: '10px 15px',
    width: 'calc(100vw - 30px)',
}) as React.CSSProperties;

interface IContainerProps {
    center?: boolean
}
export const Container:FC<IContainerProps> = (props:any) => {
    const {children, center= false} = props;
    return (
        <div style={style(center)}>
            {children}
        </div>
    )
}
