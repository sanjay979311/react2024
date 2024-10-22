
import React, { useEffect, useState,useRef } from 'react'


export function UseState() {

    const [counter, setCounter] = useState(0);
     let interValRef = useRef(null)
   

    useEffect(() =>{
        return () =>{
            if(interValRef.current){
                clearInterval(interValRef.current)
            }
        }
    },[])

    console.log('interval ref',interValRef.current)

    const handleStart = () =>{
        if(!interValRef.current){
            interValRef.current = setInterval(() =>{
                setCounter((pre) => pre + 1);
               
            },500)
        }
    }

    const handleStop = () =>{
        if(interValRef.current){
            clearInterval(interValRef.current);
            interValRef.current = null
        }
    }

    const handleReset = () =>{
        if(interValRef.current){
            clearInterval(interValRef.current);
            interValRef.current = null
        }

        setCounter(0)
    }
    
      
    return (
        <div className='container'>
            <div class="mt-4 p-5 bg-success text-white mt-5 mb-5 ">
                <h1> InterVal Id {interValRef.current} </h1>
                <hr />
                <div>
                    <div>
                        <button className='btn btn-info'
                            aria-label="Increment value"
                            onClick={handleStart}
                        >
                            Start
                        </button>
                        <span> {counter} </span>
                        <button
                            aria-label="Decrement value"
                            className='btn btn-warning'
                            onClick={handleStop}
                        >
                            stop
                        </button>
                        &nbsp; &nbsp;

                        <button
                            aria-label="Decrement value"
                            className='btn btn-danger'
                            onClick={handleReset}
                        >
                            Reset
                        </button>
                    </div>
                </div>
            </div>

        </div>

    )
}


/*
import React, { useEffect, useState } from 'react'


export function UseState() {

    const [counter, setCounter] = useState(0);
    const [intervalId, setIntervalId] = useState(null);

    useEffect(() => {
        return () => {
            if (intervalId) {
                clearInterval(intervalId)
            }
        }
    }, [intervalId])

    const handleStart = () => {
        if (!intervalId) {
            let id = setInterval(() => {
                setCounter((pre) => pre + 1)
                setIntervalId(id)
            }, 500)

        }



    }


    const handleStop = () => {
        if (intervalId) {
            clearInterval(intervalId);
            setIntervalId(null)
        }

    }

    const handleReset = () => {
        if (intervalId) {
            clearInterval(intervalId)
            setIntervalId(null)
        }

        setCounter(0);

    }

    return (
        <div className='container'>
            <div class="mt-4 p-5 bg-success text-white mt-5 mb-5 ">
                <h1> Start </h1>
                <hr />
                <div>
                    <div>
                        <button className='btn btn-info'
                            aria-label="Increment value"
                            onClick={handleStart}
                        >
                            Start
                        </button>
                        <span> {counter} </span>
                        <button
                            aria-label="Decrement value"
                            className='btn btn-warning'
                            onClick={handleStop}
                        >
                            stop
                        </button>
                        &nbsp; &nbsp;

                        <button
                            aria-label="Decrement value"
                            className='btn btn-danger'
                            onClick={handleReset}
                        >
                            Reset
                        </button>
                    </div>
                </div>
            </div>

        </div>

    )
}
*/