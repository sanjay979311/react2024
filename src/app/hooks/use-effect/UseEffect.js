
import React, { useEffect, useState } from 'react'


export function UseEffect() {

    const [counter, setCounter] = useState(0);
    const [intervalId,setIntervalId] = useState(null);

    useEffect(() =>{
      
       let id = setInterval(() =>{
        setCounter((pre) => pre +5)
        setIntervalId(id)
       },1000)
    
    return () =>{
        clearInterval(id) // Properly clear the interval
    }
    

    },[])


    const handleStop = () =>{
        if(intervalId){
            clearInterval(intervalId);
            setIntervalId(null)
        }
    }
   

    

      
    return (
        <div className='container'>
            <div class="mt-4 p-5 bg-success text-white mt-5 mb-5 ">
                <h1> InterVal Id {intervalId} </h1>
                <hr />
                <div>
                    <div>
                       
                        <span> {counter} </span>
                        <button
                            aria-label="Decrement value"
                            className='btn btn-warning'
                            onClick={handleStop}
                        >
                            stop
                        </button>
                       

                      
                    </div>
                </div>
            </div>

        </div>

    )
}



// import React, { useEffect, useState } from 'react';

// export function UseEffect() {
//     const [counter, setCounter] = useState(0);
//     const [intervalId, setIntervalId] = useState(null);

//     // UseEffect to start the interval when the component mounts
//     useEffect(() => {
//         // Start the interval only once when the component mounts
//         let id = setInterval(() => {
//             setCounter(prev => prev + 1); // Increment by 1 each second
//         }, 1000);
//         setIntervalId(id); // Store the interval ID

//         // Cleanup function to clear interval when the component unmounts
//         return () => {
//             clearInterval(id); // Properly clear the interval
//         };
//     }, []); // Empty dependency array ensures this runs only once

//     const handleStop = () => {
//         if (intervalId) {
//             clearInterval(intervalId);
//             setIntervalId(null); // Clear the interval ID after stopping it
//         }
//     };

//     return (
//         <div className='container'>
//             <div className="mt-4 p-5 bg-success text-white mt-5 mb-5">
//                 <h1>Interval Id: {intervalId}</h1>
//                 <hr />
//                 <div>
//                     <div>
//                         <span>{counter}</span>
//                         <button
//                             aria-label="Stop"
//                             className='btn btn-warning'
//                             onClick={handleStop}
//                         >
//                             Stop
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }
