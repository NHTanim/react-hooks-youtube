import React, { useEffect, useState } from 'react';

const UseEffectCleanUp = () => {

    const [widthCount, setWidthCount] = useState(0);

    useEffect ( () =>{
        window.addEventListener('resize', actualWidth);

        return () =>{
            window.removeEventListener('resize', actualWidth)
        }

    });

    const actualWidth = () =>{
        setWidthCount(window.innerWidth)
    };

    return (
        <div className='mx-10'>
            <div className='mx-40'>
                <p>The Actual Size of the window is :</p>
                <h1 className='font-bold'>{widthCount}</h1>
            </div>

     {/* ---------------main code end------------------- */}







            <br/> 
            <br/>
            <br/>
            <div>
            <h1 className='font-bold'>Use Effect Clean Up:</h1>
                <br/>
                <p>Use Effect এ by Default  (CleanUp function) ( [ ] ) থাকে ।</p>

                
                <br/>
                    <p className='font-bold'>Youtube link :</p>
                    <a className='text-sky-500 underline underline-offset-8' href="https://www.youtube.com/watch?v=5gCtW7RCtQA&list=PLwGdqUZWnOp0ningKFp1aslpZkCDAzML8&index=13">
                    useEffect CleanUp</a>
                <br/>
                <br/>
            </div>
            <br /><br /><br />
        </div>
    );
};

export default UseEffectCleanUp;