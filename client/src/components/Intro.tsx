import React, {useState, FunctionComponent} from 'react';

interface IProps {
    text?: string
  }
  
interface IIntroState {
    text?: string
    data?: number
}


export const Intro: FunctionComponent<IProps> = ({text}) => {
    const [objText, setObjText] = useState<IIntroState | null>({text:'soy un texto', data:1});
    const t = text ? text : objText?.text;
    return (
        <div>
            <p onClick={() => setObjText({text:'me han dado!'})} >
            <span>{t}</span>    
            </p>
        </div>
    )
}
