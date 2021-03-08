import React from 'react'
import {connect} from 'react-redux'

const CounterUp = ({up}) => {
    return (
        <button onClick={up}>Up</button>
    )
}

// No use
const stmp = (state) =>{

}

const DispatchToPropertyMapper = (dispatch) => {
    return{
        up: () =>{
            dispatch({
                type: "UP"
                     })
        }
    }
}

export default connect(stmp,DispatchToPropertyMapper)(CounterUp)