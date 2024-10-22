import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './counterSlice'

export function Counter() {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()

    return (
        <div className='container '>
            <div class="mt-4 p-5 bg-primary text-white mt-5 mb-5 ">
                <h1>Jumbotron Example</h1>
                <hr />
                <div>
                    <div>
                        <button className='btn btn-info'
                            aria-label="Increment value"
                            onClick={() => dispatch(increment())}
                        >
                            Increment
                        </button>
                        <span> {count} </span>
                        <button
                            aria-label="Decrement value"
                            className='btn btn-warning'
                            onClick={() => dispatch(decrement())}
                        >
                            Decrement
                        </button>
                    </div>
                </div>
            </div>

        </div>

    )
}