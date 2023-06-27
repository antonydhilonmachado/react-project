import React from 'react'
import { connect } from 'react-redux'

const ReduxExample = ({ count, increment, decrement }) => {
    return(
        <div>
            <p>Count : {count}</p>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    )
}

const mapStateToProps = (state) => ({
    count : state.count
})

const mapDispatchToProps = (dispatch) => ({
    increment: () => dispatch({ type: 'INCREMENT' }),
    decrement: () => dispatch({ type: 'DECREMENT' })
})

export default connect(mapStateToProps, mapDispatchToProps)(ReduxExample);