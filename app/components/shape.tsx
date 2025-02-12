import React from 'react'
import { Tshape } from '../types/types'

function shape({className}:Tshape) {
    return (
        <div className={"absolute " + className}>
        </div>
    )
}

export default shape