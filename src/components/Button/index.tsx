
import React from 'react'
import * as type from './type'
import './button.css'
export const Button = ({label,operation,double,triple,click}:type.props) => 
<button 
    className={`button 
    ${operation ? 'operation' : ''}
    ${double ? 'double' : ''}
    ${triple ? 'triple' : ''}`}
    onClick={() => {click(label)}}
>
    {label}</button>

export default Button