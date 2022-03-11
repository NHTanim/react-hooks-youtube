import React, { useEffect, useState } from 'react';

const UseEffectOne = () => {
 
    const [count, setCount] = useState (0);

    useEffect ( () =>{
        if (count > 1) {
            document.title = `Chats (${count})`
        }else{
            document.title = `Chats`
        }
       
    }, [count]);

    const handleCount = () =>{
        setCount(count + 1);
    };

    return (
        <div className='mx-10'>
            <div className='mx-40'>
                <h1 className='font-bold'> Count Value {count}</h1>
                <button className='bg-green-500 font-bold text-white rounded py-2 px-4 mt-3'
                onClick={handleCount}>Click</button>
            </div>

             {/* ---------------main code end------------------- */}







            <br/> 
            <br/>
            <br/>
            <div>
                <h1 className='font-bold'>Use Effect One :</h1>
                <br/>
                <p>1. Data fetching</p>
                <p>2. Setting up a Subscription (ex : netflix Subscription)</p>
                <p>3. Manually changing Dom</p>
                <p>4. API request to our backend</p>
                <p>5. Calls to our authentication service</p>
                <p>6. Error tracking call to sentry</p>
                <p>...more</p>

                <br/>
                <p>এই গুলার জন্য  useEffect use করতে হয় । </p>

                <br/>
                <p>Condition এর ভিতর কোন সময় hooks হবে না  hooks এর ভিতরে Condition হবে ।</p>

                <br/>
                <p>একটি component এর মধ্যে অনেক বার useEffect call করা যায় । useEffect একবার call করে তার ভিতরে সব করা লাগবে এমন কোন বাধ্য বাধকতা নেই</p>

                <br/>
                    <p className='font-bold'>Youtube link :</p>
                    <a className='text-sky-500 underline underline-offset-8' href="https://www.youtube.com/watch?v=rvtneYB7Fxo&list=PLwGdqUZWnOp0ningKFp1aslpZkCDAzML8&index=10">
                    React useEffect Hook</a>
                    <br/>
                    <a className='text-sky-500 underline underline-offset-8' href="https://www.youtube.com/watch?v=AP9B5E_CUks&list=PLwGdqUZWnOp0ningKFp1aslpZkCDAzML8&index=11">
                    React useEffect Hook 02</a>

                    <br/>
                    <a className='text-sky-500 underline underline-offset-8' href="https://www.youtube.com/watch?v=W-Eaumm9yjQ&list=PLwGdqUZWnOp0ningKFp1aslpZkCDAzML8&index=12">
                    useEffect Dependency List</a>

            </div>
            <br/>
            <br/>
            <br/>
            <br/>
        </div>
    );
};

export default UseEffectOne;