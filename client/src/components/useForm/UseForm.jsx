import React from 'react'
import {reduxForm, Field} from 'redux-form'
import {validate} from './validate'
import CustomInput from './CustomInput'

let UseForm = (props) => {
    const {handleSubmit} = props
    return (
        <form onSubmit={handleSubmit}>
            <Field name='username' component={CustomInput} placeholder='Username' title='Username' />
            <Field name='email' component={CustomInput} placeholder='Email' title='Email'/>
            <Field name='password' component={CustomInput} placeholder='Password' type='password' title='Password'/>
            <input type='submit' value='Enviar' />
        </form>
    )
}

export default UseForm = reduxForm({
    form: 'user',
    validate
})(UseForm)