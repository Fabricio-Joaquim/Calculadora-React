import React from 'react'
import * as type from './type'
import './display.css'
const Display = ({value}:type.display) => 
    <div className="display">{value}</div>

export default Display