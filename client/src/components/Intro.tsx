import React, {useState, FunctionComponent} from 'react';

interface IProps {
    text?: string
  }
  
interface IIntroState {
    text: string
    data: number
}

export const Intro: FunctionComponent<IProps> = ({text}) => {
    const [state, setState] = useState<IIntroState | null>({text:'soy un texto', data:1});
    const t = text ? text : state?.text;
    return (
        <div>
            <p onClick={setState(text:'me han dado!')} >{t}</p>
        </div>
    )
}
