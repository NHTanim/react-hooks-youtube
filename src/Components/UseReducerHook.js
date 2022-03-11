import React, {useReducer} from 'react';


// initial value set করা হয়েছে ।
const initialState = 0 ;


// define reducer
const reducer = (state, action) =>{
    if (action.type === "Increment") {
        return state + 1 ;
    }
    if (action.type === "Decrement") {
        return state - 1 ;
    }
    return state;
}

// component start
const UseReducerHook = () => {


const [state, dispatch] = useReducer(reducer, initialState);


    return (
        <div className='mx-10'>
            <div className='mx-40'>
                <p className='font-bold mx-50'>{state}</p>

                <button onClick={() => dispatch ({type: "Increment" })}
                className='bg-green-500 text-white text-sm rounded py-1 px-2 mt-3 ml-3'
                >Increment</button>


                <button onClick={() => dispatch ({type: "Decrement" })}
                className='bg-green-500 text-white text-sm rounded py-1 px-2 mt-3 ml-3'
                >Decrement</button>
            </div>
       {/* ----------------main code end ------------------- */}




        
            <br/> 
            <br/>
            <br/>
            <div>
                <h1 className='font-bold'>useReducer Hook</h1>
                <br/>
                <br/>
                <p>reducer একটা pure function যা take in a state and action আর return করে একটা new state । </p>
                <br/>
                <br/>
                <p><b>Pure function :</b> always returns the samne output if the samne argument are passed in & the function does not produce any side-effects .</p>

                <br/>
                <br/>
                <p> reducer componet এর বাইরে বা ভিতরে বা আলাদা কোন ফাইল এ define করা যেতে পারে । </p>
                <br/>
                <br/>

                <p>state = current state বলা হয় ।</p>
                <br/>
                <p>action method =  function বলা হয় ।</p>
                <br/>
                <p>state মানে  initial value যেটা fixed থাকবে । আর actionmethod perfrom করবে যেটার জন্য value change হবে ।</p>

                <br/>
                <br/>
                <p>reducer যেহেতু একটা function তাই এটা return করবে কিছু না কিছু ।</p>
                
                <br/>
                <br/>
                    <p className='font-bold'>Youtube link :</p>
                    <a className='text-sky-500 underline underline-offset-8'
                    href="https://www.youtube.com/watch?v=VdXGIEYZuCw&list=PLwGdqUZWnOp0ningKFp1aslpZkCDAzML8&index=18">
                    useReducer Hook</a>
                <br/>
                <br/>

            </div>
            <br/>
            <br/>
            <br /><br /><br />
        </div>
    );
};

export default UseReducerHook;