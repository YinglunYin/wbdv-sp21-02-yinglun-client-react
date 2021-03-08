import React from 'react'
import {connect} from 'react-redux'

const CounterDown = ({down}) => {
    return (
        <button onClick={down}>Down</button>
    )
}

// No use
const stmp = (state) =>{

}

const DispatchToPropertyMapper = (dispatch) => {
    return{
        down: () =>{
            dispatch({
                         type: "DOWN"
                     })
        }
    }
}

export default connect(stmp,DispatchToPropertyMapper)(CounterDown)