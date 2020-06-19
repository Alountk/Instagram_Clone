import React from 'react';
import {useSelector} from 'react-redux'
import './App.css';
import UseForm from './components/useForm/UseForm';


function App() {
  const {
    logged= false,
    username= null,
    email= null,
    message= null,
    loading= true
  } : any = useSelector((state : any) => state.auth)
  const handleOnSubmit = (payload:any) => {
    console.log(payload)
  }
  return (
    <div className="App">
      <UseForm onSubmit={handleOnSubmit} />
    </div>
  );
}

export default App;
