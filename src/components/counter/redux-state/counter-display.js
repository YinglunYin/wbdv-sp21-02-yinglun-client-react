import React from 'react'
import {connect} from 'react-redux'
import CounterUp from "./Counter-up";
import CounterDown from "./counter-down";

const CounterDisplay = ({myCount}) => {
    return (
        <h1>
            Count: {myCount}
        </h1>

    )
}

const stateToPropertyMapper = (state) =>{
    return {
        myCount: state.count
    }
}


export default connect(stateToPropertyMapper)(CounterDisplay)